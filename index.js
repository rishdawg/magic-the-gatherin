const axios = require('axios');
const fs = require('fs');


const baseUrl = 'https://api.magicthegathering.io/v1/cards';
const BATCH_SIZE = 10;

const batchCall = async (batches, cards=[]) => {
    if(batches.length > 0) {
      console.log(batches.length);
      const allBatchRequests = batches[0].map((url) => axios.get(url));
      try {
        const responses = await Promise.all(allBatchRequests);
        responses.forEach(resp => {
          resp.data.cards.forEach(card => cards.push(card))
        })
        return await batchCall(batches.slice(1),cards);
      }
      catch(err) {
        console.log(err);
      }
    }
    else {
      return cards;
    }
  }

const retrieveAllCards = async () => {
  const totalCardCount = await axios.get(baseUrl).then(({headers}) =>  headers['total-count']);
  const totalPages = Math.ceil(totalCardCount/100);

  const urls = [];
  for (pageNum = 1; pageNum <= totalPages; pageNum++) {
     urls.push(`${baseUrl}?page=${pageNum}`);
  }

  // chunk the parallelization
  const batches = [];
  const maxNumOfBatches = Math.ceil(urls.length/BATCH_SIZE);
  for(batchNum = 0; batchNum< maxNumOfBatches; batchNum++){
    const currentIndex = batchNum*BATCH_SIZE;
    const batch = urls.slice(currentIndex,currentIndex+BATCH_SIZE);
    batches.push(batch);
  }

  try {
  const cardData = await batchCall(batches);
  return cardData;
  }
  catch(err) {
    console.log(err);
  }

}

const mapCardData = (cards) => (
  cards.map((card) => {
    const { name, setName, set, type, text, rarity, colors } = card
    const removedNewLineText =  typeof text === 'string' ? text.replace(/\n|\r/g, "") : text;
    return {
      name,
      setName,
      set,
      type,
      text: removedNewLineText,
      rarity,
      colors
    }
  })
)

const appendDataToExcel = (data) => {
  let formmattedData = 'name'+'\t'+'setName'+'\t'+'set'+'\t'+'type'+'\t'+'text'+'\t'+'rarity'+'\t'+'colors'+'\n';
  for (i = 0; i < data.length; i++) {
    const {
      name,
      setName,
      set,
      type,
      text,
      rarity,
      colors
    } = data[i];
    formmattedData=formmattedData+name+'\t'+setName+'\t'+set+'\t'+type+'\t'+text+'\t'+rarity+'\t'+colors+'\n';
  }
  fs.appendFile('cards.xls', formmattedData, (err) => {
    if (err) console.log(err);
    console.log('File created');
  });
}

const getDB = async () => {
  const cards = await retrieveAllCards();
  const mappedCardData = mapCardData(cards);
  appendDataToExcel(mappedCardData);
}

getDB();