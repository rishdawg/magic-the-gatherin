const axios = require('axios');
const fs = require('fs');


const baseUrl = 'https://api.magicthegathering.io/v1/cards';
const BATCH_SIZE = 1;

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
const setNumberMap = new Map()
  setNumberMap.set('LEA', '1');
  setNumberMap.set('LEB', '2');
  setNumberMap.set('2ED', '3');
  setNumberMap.set('ARN', '4');
  setNumberMap.set('ATQ', '5');
  setNumberMap.set('3ED', '6');
  setNumberMap.set('LEG', '7');
  setNumberMap.set('DRK', '8');
  setNumberMap.set('FEM', '9');
  setNumberMap.set('4ED', '10');
  setNumberMap.set('ICE', '11');
  setNumberMap.set('CHR', '12');
  setNumberMap.set('REN', '13');
  setNumberMap.set('HML', '14');
  setNumberMap.set('ALL', '15');
  setNumberMap.set('MIR', '16');
  setNumberMap.set('VIS', '17');
  setNumberMap.set('5ED', '18');
  setNumberMap.set('POR', '19');
  setNumberMap.set('WTH', '20');
  setNumberMap.set('TMP', '21');
  setNumberMap.set('STH', '22');
  setNumberMap.set('EXO', '23');
  setNumberMap.set('P02', '24');
  setNumberMap.set('UGL', '25');
  setNumberMap.set('USG', '26');
  setNumberMap.set('ATH', '27');
  setNumberMap.set('ULG', '28');
  setNumberMap.set('6ED', '29');
  setNumberMap.set('PTK', '30');
  setNumberMap.set('UDS', '31');
  setNumberMap.set('S99', '32');
  setNumberMap.set('MMQ', '33');
  setNumberMap.set('BRB', '34');
  setNumberMap.set('NEM', '35');
  setNumberMap.set('S00', '36');
  setNumberMap.set('PCY', '37');
  setNumberMap.set('INV', '38');
  setNumberMap.set('BTD', '39');
  setNumberMap.set('PLS', '40');
  setNumberMap.set('7ED', '41');
  setNumberMap.set('APC', '42');
  setNumberMap.set('ODY', '43');
  setNumberMap.set('DKM', '44');
  setNumberMap.set('TOR', '45');
  setNumberMap.set('JUD', '46');
  setNumberMap.set('ONS', '47');
  setNumberMap.set('LGN', '48');
  setNumberMap.set('SCG', '49');
  setNumberMap.set('8ED', '50');
  setNumberMap.set('MRD', '51');
  setNumberMap.set('DST', '52');
  setNumberMap.set('5DN', '53');
  setNumberMap.set('CHK', '54');
  setNumberMap.set('UNH', '55');
  setNumberMap.set('BOK', '56');
  setNumberMap.set('SOK', '57');
  setNumberMap.set('9ED', '58');
  setNumberMap.set('PSAL', '59');
  setNumberMap.set('RAV', '60');
  setNumberMap.set('GPT', '61');
  setNumberMap.set('DIS', '62');
  setNumberMap.set('CSP', '63');
  setNumberMap.set('CST', '64');
  setNumberMap.set('TSP', '65');
  setNumberMap.set('TSB', '66');
  setNumberMap.set('PLC', '67');
  setNumberMap.set('FUT', '68');
  setNumberMap.set('10E', '69');
  setNumberMap.set('P10E', '70');
  setNumberMap.set('LRW', '71');
  setNumberMap.set('DD1', '72');
  setNumberMap.set('MOR', '73');
  setNumberMap.set('SHM', '74');
  setNumberMap.set('EVE', '75');
  setNumberMap.set('DRB', '76');
  setNumberMap.set('ALA', '77');
  setNumberMap.set('DD2', '78');
  setNumberMap.set('CON', '79');
  setNumberMap.set('DDC', '80');
  setNumberMap.set('ARB', '81');
  setNumberMap.set('M10', '82');
  setNumberMap.set('PM10', '83');
  setNumberMap.set('V09', '84');
  setNumberMap.set('HOP', '85');
  setNumberMap.set('OHOP', '86');
  setNumberMap.set('ZEN', '87');
  setNumberMap.set('PZEN', '88');
  setNumberMap.set('DDD', '89');
  setNumberMap.set('H09', '90');
  setNumberMap.set('WWK', '91');
  setNumberMap.set('PWWK', '92');
  setNumberMap.set('DDE', '93');
  setNumberMap.set('ROE', '94');
  setNumberMap.set('PROE', '95');
  setNumberMap.set('DPA', '96');
  setNumberMap.set('ARC', '97');
  setNumberMap.set('OARC', '98');
  setNumberMap.set('M11', '99');
  setNumberMap.set('PM11', '100');
  setNumberMap.set('V10', '101');
  setNumberMap.set('DDF', '102');
  setNumberMap.set('SOM', '103');
  setNumberMap.set('PSOM', '104');
  setNumberMap.set('PD2', '105');
  setNumberMap.set('PS11', '106');
  setNumberMap.set('MBS', '107');
  setNumberMap.set('PMBS', '108');
  setNumberMap.set('DDG', '109');
  setNumberMap.set('NPH', '110');
  setNumberMap.set('PNPH', '111');
  setNumberMap.set('CMD', '112');
  setNumberMap.set('PCMD', '113');
  setNumberMap.set('OCMD', '114');
  setNumberMap.set('M12', '115');
  setNumberMap.set('PM12', '116');
  setNumberMap.set('V11', '117');
  setNumberMap.set('DDH', '118');
  setNumberMap.set('ISD', '119');
  setNumberMap.set('PISD', '120');
  setNumberMap.set('PD3', '121');
  setNumberMap.set('DKA', '122');
  setNumberMap.set('PDKA', '123');
  setNumberMap.set('DDI', '124');
  setNumberMap.set('AVR', '125');
  setNumberMap.set('PAVR', '126');
  setNumberMap.set('PC2', '127');
  setNumberMap.set('OPC2', '128');
  setNumberMap.set('M13', '129');
  setNumberMap.set('PM13', '130');
  setNumberMap.set('V12', '131');
  setNumberMap.set('DDJ', '132');
  setNumberMap.set('RTR', '133');
  setNumberMap.set('PRTR', '134');
  setNumberMap.set('CM1', '135');
  setNumberMap.set('OCM1', '136');
  setNumberMap.set('TD2', '137');
  setNumberMap.set('GTC', '138');
  setNumberMap.set('PGTC', '139');
  setNumberMap.set('DDK', '140');
  setNumberMap.set('DGM', '141');
  setNumberMap.set('PDGM', '142');
  setNumberMap.set('MMA', '143');
  setNumberMap.set('M14', '144');
  setNumberMap.set('PM14', '145');
  setNumberMap.set('V13', '146');
  setNumberMap.set('DDL', '147');
  setNumberMap.set('THS', '148');
  setNumberMap.set('PTHS', '149');
  setNumberMap.set('THP1', '150');
  setNumberMap.set('TFTH', '151');
  setNumberMap.set('C13', '152');
  setNumberMap.set('OC13', '153');
  setNumberMap.set('TBTH', '154');
  setNumberMap.set('BNG', '155');
  setNumberMap.set('THP2', '156');
  setNumberMap.set('PBNG', '157');
  setNumberMap.set('DDM', '158');
  setNumberMap.set('JOU', '159');
  setNumberMap.set('THP3', '160');
  setNumberMap.set('PJOU', '161');
  setNumberMap.set('TDAG', '162');
  setNumberMap.set('MD1', '163');
  setNumberMap.set('CNS', '164');
  setNumberMap.set('VMA', '165');
  setNumberMap.set('M15', '166');
  setNumberMap.set('CP1', '167');
  setNumberMap.set('PM15', '168');
  setNumberMap.set('V14', '169');
  setNumberMap.set('DDN', '170');
  setNumberMap.set('KTK', '171');
  setNumberMap.set('PKTK', '172');
  setNumberMap.set('C14', '173');
  setNumberMap.set('OC14', '174');
  setNumberMap.set('EVG', '175');
  setNumberMap.set('JVC', '176');
  setNumberMap.set('DVD', '177');
  setNumberMap.set('GVL', '178');
  setNumberMap.set('FRF', '179');
  setNumberMap.set('CP2', '180');
  setNumberMap.set('PFRF', '181');
  setNumberMap.set('UGIN', '182');
  setNumberMap.set('DDO', '183');
  setNumberMap.set('DTK', '184');
  setNumberMap.set('PDTK', '185');
  setNumberMap.set('MM2', '186');
  setNumberMap.set('ORI', '187');
  setNumberMap.set('V15', '188');
  setNumberMap.set('DDP', '189');
  setNumberMap.set('BFZ', '190');
  setNumberMap.set('PBFZ', '191');
  setNumberMap.set('EXP', '192');
  setNumberMap.set('C15', '193');
  setNumberMap.set('OC15', '194');
  setNumberMap.set('OGW', '195');
  setNumberMap.set('POGW', '196');
  setNumberMap.set('DDQ', '197');
  setNumberMap.set('W16', '198');
  setNumberMap.set('SOI', '199');
  setNumberMap.set('PSOI', '200');
  setNumberMap.set('EMA', '201');
  setNumberMap.set('EMN', '202');
  setNumberMap.set('PEMN', '203');
  setNumberMap.set('V16', '204');
  setNumberMap.set('CN2', '205');
  setNumberMap.set('DDR', '206');
  setNumberMap.set('KLD', '207');
  setNumberMap.set('MPS', '208');
  setNumberMap.set('PKLD', '209');
  setNumberMap.set('C16', '210');
  setNumberMap.set('OC16', '211');
  setNumberMap.set('PCA', '212');
  setNumberMap.set('OPCA', '213');
  setNumberMap.set('AER', '214');
  setNumberMap.set('PAER', '215');
  setNumberMap.set('MM3', '216');
  setNumberMap.set('DDS', '217');
  setNumberMap.set('W17', '218');
  setNumberMap.set('AKH', '219');
  setNumberMap.set('PAKH', '220');
  setNumberMap.set('MP2', '221');
  setNumberMap.set('CMA', '222');
  setNumberMap.set('E01', '223');
  setNumberMap.set('OE01', '224');
  setNumberMap.set('HOU', '225');
  setNumberMap.set('PHOU', '226');
  setNumberMap.set('C17', '227');
  setNumberMap.set('OC17', '228');
  setNumberMap.set('XLN', '229');
  setNumberMap.set('PXLN', '230');
  setNumberMap.set('DDT', '231');
  setNumberMap.set('IMA', '232');
  setNumberMap.set('E02', '233');
  setNumberMap.set('V17', '234');
  setNumberMap.set('UST', '235');
  setNumberMap.set('PUST', '236');
  setNumberMap.set('RIX', '237');
  setNumberMap.set('PRIX', '238');
  setNumberMap.set('A25', '239');
  setNumberMap.set('DDU', '240');
  setNumberMap.set('DOM', '241');
  setNumberMap.set('PDOM', '242');
  setNumberMap.set('CM2', '243');
  setNumberMap.set('BBD', '244');
  setNumberMap.set('PBBD', '245');
  setNumberMap.set('SS1', '246');
  setNumberMap.set('GS1', '247');
  setNumberMap.set('M19', '248');
  setNumberMap.set('PM19', '249');
  setNumberMap.set('C18', '250');
  setNumberMap.set('OC18', '251');
  setNumberMap.set('GRN', '252');
  setNumberMap.set('PGRN', '253');
  setNumberMap.set('GK1', '254');
  setNumberMap.set('GNT', '255');
  setNumberMap.set('UMA', '256');
  setNumberMap.set('PUMA', '257');
  setNumberMap.set('RNA', '258');
  setNumberMap.set('PRNA', '259');
  setNumberMap.set('GK2', '260');
  setNumberMap.set('WAR', '261');
  setNumberMap.set('PWAR', '262');
  setNumberMap.set('MED', '263');
  setNumberMap.set('MH1', '264');
  setNumberMap.set('PMH1', '265');
  setNumberMap.set('SS2', '266');
  setNumberMap.set('M20', '267');
  setNumberMap.set('PM20', '268');
  setNumberMap.set('C19', '269');
  setNumberMap.set('OC19', '270');
  setNumberMap.set('ELD', '271');
  setNumberMap.set('PELD', '272');
  setNumberMap.set('MB1', '273');
  setNumberMap.set('FMB1', '274');
  setNumberMap.set('CMB1', '275');
  setNumberMap.set('GN2', '276');
  setNumberMap.set('SLD', '277');
  setNumberMap.set('PSLD', '278');
  setNumberMap.set('THB', '279');
  setNumberMap.set('PTHB', '280');
  setNumberMap.set('UND', '281');
  setNumberMap.set('IKO', '282');
  setNumberMap.set('PIKO', '283');
  setNumberMap.set('C20', '284');
  setNumberMap.set('OC20', '285');
  setNumberMap.set('SLU', '286');
  setNumberMap.set('SS3', '287');
  setNumberMap.set('M21', '288');
  setNumberMap.set('PM21', '289');
  setNumberMap.set('JMP', '290');
  setNumberMap.set('FJMP', '291');
  setNumberMap.set('2XM', '292');
  setNumberMap.set('ZNR', '293');
  setNumberMap.set('ZNE', '294');
  setNumberMap.set('ZNC', '295');
  setNumberMap.set('CMR', '296');
  setNumberMap.set('TSR', '297');



const retrieveAllCards = async () => {
  const setList = 
    'LEA,LEB,2ED,ARN,ATQ,3ED,LEG,DRK,FEM,4ED,ICE,CHR,REN,HML,ALL,MIR,VIS,5ED,POR,WTH,TMP,STH,EXO,P02,UGL,USG,ATH,ULG,6ED,PTK,UDS,S99,MMQ,BRB,NEM,S00,PCY,INV,BTD,PLS,7ED,APC,ODY,DKM,TOR,JUD,ONS,LGN,SCG,8ED,MRD,DST,5DN,CHK,UNH,BOK,SOK,9ED,PSAL,RAV,GPT,DIS,CSP,CST,TSP,TSB,PLC,FUT,10E,P10E,LRW,DD1,MOR,SHM,EVE,DRB,ALA,DD2,CON,DDC,ARB,M10,PM10,V09,HOP,OHOP,ZEN,PZEN,DDD,H09,WWK,PWWK,DDE,ROE,PROE,DPA,ARC,OARC,M11,PM11,V10,DDF,SOM,PSOM,PD2,PS11,MBS,PMBS,DDG,NPH,PNPH,CMD,PCMD,OCMD,M12,PM12,V11,DDH,ISD,PISD,PD3,DKA,PDKA,DDI,AVR,PAVR,PC2,OPC2,M13,PM13,V12,DDJ,RTR,PRTR,CM1,OCM1,TD2,GTC,PGTC,DDK,DGM,PDGM,MMA,M14,PM14,V13,DDL,THS,PTHS,THP1,TFTH,C13,OC13,TBTH,BNG,THP2,PBNG,DDM,JOU,THP3,PJOU,TDAG,MD1,CNS,VMA,M15,CP1,PM15,V14,DDN,KTK,PKTK,C14,OC14,EVG,JVC,DVD,GVL,FRF,CP2,PFRF,UGIN,DDO,DTK,PDTK,MM2,ORI,V15,DDP,BFZ,PBFZ,EXP,C15,OC15,OGW,POGW,DDQ,W16,SOI,PSOI,EMA,EMN,PEMN,V16,CN2,DDR,KLD,MPS,PKLD,C16,OC16,PCA,OPCA,AER,PAER,MM3,DDS,W17,AKH,PAKH,MP2,CMA,E01,OE01,HOU,PHOU,C17,OC17,XLN,PXLN,DDT,IMA,E02,V17,UST,PUST,RIX,PRIX,A25,DDU,DOM,PDOM,CM2,BBD,PBBD,SS1,GS1,M19,PM19,C18,OC18,GRN,PGRN,GK1,GNT,,UMA,PUMA,RNA,PRNA,GK2,WAR,PWAR,MED,MH1,PMH1,SS2,M20,PM20,C19,OC19,ELD,PELD,MB1,FMB1,CMB1,GN2,SLD,PSLD,THB,PTHB,UND,IKO,PIKO,C20,OC20,SLU,SS3,M21,PM21,JMP,FJMP,2XM,ZNR,ZNE,ZNC,CMR,TSR'
  const urlWithSet = `${baseUrl}?set=${setList}`
  const totalCardCount = await axios.get(urlWithSet).then(({headers}) =>  headers['total-count']);
  const totalPages = Math.ceil(totalCardCount/100);

  const urls = [];
 

  for (pageNum = 1; pageNum <= totalPages; pageNum++) {
     urls.push(`${baseUrl}?page=${pageNum}&set=${setList}`);
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
    const { name, setName, set, cmc, manaCost, type, types, text, rarity, colors, colorIdentity, imageUrl, flavor, power, toughness} = card
    const removedNewLineText =  typeof text === 'string' ? text.replace(/\n|\r/g, "") : text
    const removedNewLineFlavor = typeof flavor === 'string' ? flavor.replace(/\n|\r/g, "") : flavor;
    return {
      name,
      setName,
      set,
      cmc,
      manaCost,
      type,
      types,
      text: removedNewLineText,
      rarity,
      colors,
      colorIdentity,
      imageUrl,
      flavor: removedNewLineFlavor,
      power,
      toughness
    }
  })
)

const appendDataToExcel = (data) => {
  let formmattedData = 'name'+'\t'+'setName'+'\t'+'set'+'\t'+'setNumber'+'\t'+'cmc'+'\t'+'manaCost'+'\t'+'type'+'\t'+'types'+'\t'+'text'+'\t'+'rarity'+'\t'+'colors'+'\t'+'colorIdentity'+'\t'+'imageUrl'+'\t'+'flavor'+'\t'+'power'+'\t'+'toughness'+'\n';
  for (i = 0; i < data.length; i++) {
    const {
      name,
      setName,
      set,
      cmc,
      manaCost,
      type,
      types,
      text,
      rarity,
      colors,
      colorIdentity,
      imageUrl,
      flavor,
      power,
      toughness
    } = data[i];
    const setNumber = setNumberMap.get(set)
    formmattedData=formmattedData+name+'\t'+setName+'\t'+set+'\t'+setNumber+'\t'+cmc+'\t'+manaCost+'\t'+type+'\t'+types+'\t'+text+'\t'+rarity+'\t'+colors+'\t'+colorIdentity+'\t'+imageUrl+'\t'+flavor+'\t'+power+'\t'+toughness+'\n';
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