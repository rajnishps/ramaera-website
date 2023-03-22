import { FormWrapper } from "./FormWrapper"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  changeName,
  changeApplicantType,
  changeApplicantAddress,
  changeEmail,
  changeFirmName,
  changeMobileNumber,
  changeDistrict,
  changeState,
} from "../../../state/slice/applicationSlice"
export function UserForm({}) {
  const [partner, setPartner] = useState("")
  const [stateIndia, setStateIndia] = useState("")
  const [isFirm, setIsFirm] = useState(false)
  const [district, setDistrict] = useState("")
  const [location, setLocation] = useState([])
  const [locationStock, setLocationStock] = useState([])
  const dispatch = useDispatch()
  const changeHandler = (val) => {
    setPartner(val)
    setDistrict("")
  }
  const changeStateIndia = (val) => {
    setStateIndia(val)
    setDistrict("")
  }
  const changeDistricts = async (val) => {
    setDistrict(val)
  }
  const changeFirm = () => {
    setIsFirm(!isFirm)
  }
  const setRetailLocation = (val) => {
    console.log(locationStock)
    switch (val) {
      case "Danapur":
        setLocation([
          "Ganghara",
          "Hathia Kandh",
          "Hetanpur",
          "Jamaluddin",
          "Jamsaut",
          "Patlapur",
          "Sarari",
          "Kasim Chak",
          "Kothawan",
          "Lakhani",
          "Bigha",
          "Manas",
          "Mobarakpur-Raghurampur",
          "Purani Panapur",
        ])
        break
      case "Jehanabad":
        setLocation([
          "Jehanabad",
          "Makhdumpur",
          "Ghosi",
          "Hulasganj",
          "Ratni",
          "Faridpur",
          "Modanganj",
          "Kako",
        ])
        break
      case "Arwal":
        setLocation([
          "Kaler",
          "Karpi",
          "Kurtha",
          "Arwal",
          "Sonbhadra Banshi Suryapur",
        ])
        break
      case "Paliganj":
        setLocation(["Paliganj", "Dulhin Bazar", "Bikram"])
        break
      case "Gaya":
        setLocation([
          "Gaya Sadar",
          "Manpur",
          "Belaganj",
          "Bodhgaya",
          "Tankuppa",
          "Fatehpur",
          "Wazirganj",
          "Tekari",
          "Konch",
          "Guraru",
          "Paraiya",
          "Sherghati",
          "Gurua",
          "Amas",
          "Bankey ",
          "Bazar",
          "Imamganj",
          "Dumariya",
          "Barachatti",
          "Mohanpur",
          "Dobhi",
        ])
        break
      case "Aurangabad":
        setLocation([
          "Aurangabad",
          "Barun",
          "Daudnagar",
          "Deo",
          "Goh",
          "Haspura",
          "Kutumba",
          "Madanpur",
          "Nabinagar",
          "Obra",
          "Rafiganj",
        ])
        break
      case "Rohtas":
        setLocation([
          "Akorhi ",
          "Gola",
          "Bikramganj",
          "Chenari",
          "Dawath",
          "Dehri",
          "Dinara",
          "Karakat",
          "Kargahar",
          "Kochas",
          "Nasriganj",
          "Nauhatta",
          "Nokha",
          "Rajpur",
          "Rohtas",
          "Sanjhauli",
          "Sasaram",
          "Sheosagar",
          "Suryapura",
          "Tilouthu",
        ])
        break
      case "Kaimur":
        setLocation([
          "Adhaura",
          "Bhabua",
          "Bhagwanpur",
          "Chainpur",
          "Chand",
          "Durgawati",
          "Kundra",
          "Mohania",
          "Nuaon",
          "Ramgarh",
          "Rampur",
        ])
        break
      case "Buxar":
        setLocation([
          "Barhmpur",
          "Buxer",
          "Chakki",
          "Chaugain",
          "Chausa",
          "Dumraon",
          "Itarhi",
          "Kesath",
          "Nawanagar",
          "Rajpur",
          "Simri",
        ])
        break
      case "Arrah":
        setLocation([
          "Arrah",
          "Agiaon",
          "Barhara",
          "Bihiya",
          "Charpokhari",
          "Garhani",
          "Jagdispur",
          "Koilwar",
          "Piro",
          "Udwantnagar",
          "Sahar",
          "Sandesh",
          "Shahpur",
          "Tarari",
        ])
        break
      case "Biharsharif":
        setLocation([
          "Asthawan",
          "Ben",
          "Bihar",
          "Bind",
          "Chandi",
          "Ekangarsarai",
          "Giriak",
          "Harnaut",
          "Islampur",
          "Karai Parsurai",
          "Katrisarai",
          "Nagar Nausa",
          "Noorsarai",
          "Parbalpur",
          "Rahui",
          "Sarmera",
          "Silao",
          "Tharthari",
        ])
        break
      case "Sheikhpura":
        setLocation([
          "Ariari",
          "Barbigha",
          "Chewara",
          "Ghat ",
          "Kusumbha",
          "Sheikhpura",
          "Shekhopur Sarai",
        ])
        break
      case "Lakhisarai":
        setLocation(["Sadar Lakhisarai", "Surajgarha", "Halsi"])
        break
      case "Munger":
        setLocation([
          "Asarganj",
          "Bariarpur",
          "Dharhara",
          "Jamalpur",
          "Kharagpur",
          "Munger",
          "Sangrampur",
          "Tarapur",
          "Tetiha Bambor",
        ])
        break
      case "Begusarai":
        setLocation([
          "Bachhwara",
          "Bakhri",
          "Balia",
          "Begusarai",
          "Bhagwanpur",
          "Birpur",
          "Cheria Bariarpur",
          "Chhorahi",
          "Dandari",
          "Garhpura",
          "Khudabandpur",
          "Mansurchak",
          "Matihani",
          "Naokothi",
          "Sahebpur kamal",
          "Shamho Akha kurha",
          "Teghra",
        ])
        break
      case "Bhagalpur":
        setLocation([
          "Nathnagar",
          "Sabour",
          "Shahkund",
          "Sultanganj",
          "Kahalgaon",
          "Sanhaula",
          "Jagdishpur",
          "Bihpur",
          "Colgong",
          "Gopalpur",
          "Goradih",
          "Ismailpur",
          "Kharik",
          "Narayanpur",
          "Naugachhia",
          "Pirpainti",
          "Rangra Chowk",
          "Sonhaula",
        ])
        break
      case "Katihar":
        setLocation([
          "Katihar",
          "Dandkhora",
          "Hasanganj",
          "Korha",
          "Sameli",
          "Falka",
          "Kursela",
          "Barari",
          "Mansahi",
          "Pranpur",
          "Barsoi",
          "Balrampur",
          "Azamnagar",
          "Kadwa",
          "Manihari",
          "Amdabad",
        ])
        break
      case "Banka":
        setLocation([
          "Amarpur",
          "Banka",
          "Barahat",
          "Belhar",
          "Bounsi",
          "Chandan",
          "Dhoraiya",
          "Fullidumar",
          "Katoriya",
          "Rajoun",
          "Sambhuganj",
        ])
        break
      case "Muzaffarpur":
        setLocation([
          "Aurai",
          "Bandra",
          "Bochahan",
          "Gaighat",
          "Kanti",
          "Katra",
          "Kurhani",
          "Marwan",
          "Minapur",
          "Motipur",
          "Muraul",
          "Mushahari",
          "Sahebganj",
          "Sakra",
          "Paroo",
          "Saraiya",
        ])
        break
      case "Vaishali":
        setLocation([
          "Bhagwanpur",
          "Bidupur",
          "Chehra kalan",
          "Desri",
          "Goraul",
          "Hajipur",
          "Jandaha",
          "Lalganj",
          "Mahnar",
          "Mahua",
          "Patepur",
          "Paterhi Belsar",
          "Raghopur",
          "Raja Pakar",
          "Sahdai Buzurg",
          "Vaishali",
        ])
        break
      case "Samastipur":
        setLocation([
          "Bibhutpur",
          "Bithan",
          "Dalsinghsarai",
          "Hasanpur",
          "Kalyanpur",
          "Khanpur",
          "Mohanpur          ",
          "Mohiuddinagar",
          "Morwa",
          "Patori",
          "Pusa",
          "Rosera",
          "Samastipur",
          "Sarairanjan",
          "Sivaji nagar",
          "Singhia",
          "Tajpur",
          "Ujiarpur",
          "Vidyapati Nagar",
          "Warisnagar",
        ])
        break
      case "Darbhanga":
        setLocation([
          "Darbhanga Sadar",
          "Bahadurpur",
          "Baheri",
          "Hayaghat",
          "Hanuman Nagar",
          "Keoti",
          "Jale",
          "Singhwara",
          "Manigachhi",
          "Tardih",
        ])
        break
      case "West Champaran":
        setLocation([
          "Bagaha",
          "Bairia",
          "Bettiah",
          "Bhitaha",
          "Chanpatia",
          "Gaunaha",
          "Jogapatti",
          "Lauriya",
          "Madhubani",
          "Mainatanr",
          "Majhaulia",
          "Narkatiaganj",
          "Nautan",
          "Piprasi",
          "Ramnagar",
          "Sidhaw",
          "Sikta",
          "Thakrahan",
        ])
        break
      case "Sheohar":
        setLocation([
          "Dumri Katsarai",
          "Piprarhi",
          "Purnahiya",
          "Sheohar",
          "Tariani Chowk",
        ])
        break
      case "Sitamarhi":
        setLocation([
          "Bairgania",
          "Bajpatti",
          "Bathnaha",
          "Belsand",
          "Bokhara",
          "Charaut",
          "Dumra",
          "Majorganj",
          "Nanpur",
          "Parihar",
          "Parsauni",
          "Pupri",
          "Riga",
          "Runisaidpur",
          "Sonbhadra",
          "Suppi",
          "Sursand",
        ])
        break
      case "East Champaran":
        setLocation([
          "Adapur",
          "Areraj",
          "Banjaria",
          "Chakia",
          "Chiraia",
          "Dhaka",
          "Ghorasahan",
          "Harsidhi",
          "Kalyanpur",
          "Kesaria",
          "Kotwa",
          "Madhuban",
          "Mehsi",
          "Motihari",
          "Narkatia",
          "Paharpur",
          "Pakri ",
          "Dayal",
          "Patahi",
          "Phenhara",
          "Piprakothi",
          "Ramgarhwa",
          "Raxaul",
          "Sangrampur",
          "Sugauli",
          "Tetaria",
          "Turkaulia",
        ])
        break
      case "Saharsa":
        setLocation([
          "Kahra",
          "Sattar ",
          "Kataiya",
          "Nauhatta",
          "Mahishi",
          "Sour ",
          "Bazar",
          "Sonbarsa",
          "Patarghat",
          "Simri Bakhtiyarpur",
          "Salkhua",
          "Banma Ithari",
        ])
        break
      case "Madhubani":
        setLocation([
          "Andhratharhi",
          "Babubarhi",
          "Basopatti",
          "Benipatti",
          "Bisfi",
          "Ghoghardiha",
          "Harlakhi",
          "Jainagar",
          "Jhanjharpur",
          "Kaluahi",
          "Khajauli",
          "Ladania",
          "Lakhnaur",
          "Laukaha",
          "Madhepur",
          "Madhubani",
          "Madhwapur",
          "Pandaul",
          "Phulparas",
          "Rajnagar",
        ])
        break
      case "Khagaria":
        setLocation([
          "Alauli",
          "Beldaur",
          "Chautham",
          "Gogri",
          "Khagaria",
          "Mansi",
          "Parbatta",
        ])
        break
      case "Supaul":
        setLocation([
          "Basantpur",
          "Chhatapur",
          "Kishanpur",
          "Marauna",
          "Nirmali",
          "Pipra",
          "Pratapganj",
          "Raghopur",
          "Saraigarh Bhaptiyahi",
          "Supaul",
          "Tribeniganj",
        ])
        break
      case "Kishanganj":
        setLocation([
          "Bahadurganj",
          "Dighalbank",
          "Kishanganj",
          "Kochadhaman",
          "Pothia",
          "Terhagachh",
          "Thakurganj",
        ])
        break
      case "Araria":
        setLocation([
          "Araria",
          "Jokihat",
          "Kursakanta",
          "Raniganj",
          "Sikti",
          "Palasi",
          "Forbesganj",
          "Narpatganj",
          "Bhargama",
        ])
        break
      case "Madhepura":
        setLocation([
          "Alamnagar",
          "Bihariganj",
          "Chausa",
          "Gamharia",
          "Ghailarh",
          "Gwalpara",
          "Kishanganj",
          "Kumarkhand",
          "Madhepura",
          "Murliganj",
          "Puraini",
          "Shankarpur",
          "Singheshwar",
        ])
        break
      case "Gopalganj":
        setLocation([
          "Baikunthpur",
          "Barauli",
          "Bhorey",
          "Bijaipur",
          "Gopalganj",
          "Hathua",
          "Katiya",
          "Kuchaikote",
          "Manjha",
          "Pach Deuri",
          "Phulwaria",
          "Sidhwalia",
          "Thawe",
          "Uchkagaon",
        ])
        break
      case "Siwan":
        setLocation([
          "Andar",
          "Barharia",
          "Basantpur",
          "Bhagwanpur Hat",
          "Darauli",
          "Daraundha",
          "Goriakothi",
          "Guthani",
          "Hasanpura",
          "Hussainganj",
          "Lakri Nabiganj",
          "Maharajganj",
          "Nautan",
          "Mairwa",
          "Pachrukhi",
          "Raghunathpur",
          "Siswan",
          "Siwan",
          "Ziradei",
        ])
        break
      case "Chapra":
        setLocation([
          "Amnour",
          "Baniapur",
          "Chapra",
          "Dariapur",
          "Dighwara",
          "Ekma",
          "Garkha",
          "Ishupur",
          "Jalalpur",
          "Lahladpur",
          "Maker",
          "Manjhi",
          "Marhaura",
          "Mashrakh",
          "Nagra",
          "Panapur",
          "Parsa",
          "Revelganj",
          "Sonepur",
          "Taraiya",
        ])
        break
      case "Aligarh":
        setLocation([
          "Khair",
          "Gobhana",
          "Chandaus",
          "Jawan",
          "Lodha",
          "Dhanipur",
          "Akrabad",
          "Iglas",
          "Gonda",
          "Atrauli",
          "Bijauli",
          "Gangeri",
        ])
        break
      case "Etah":
        setLocation([
          "Sheetalpur	Etah",
          "Sakit",
          "Nidhauli Kalan",
          "Marahara",
          "Jalesar",
          "Awagarh ",
          "Jaithara",
          "Aliganj",
        ])
        break
      case "Hathras":
        setLocation([
          "Hathras",
          "Murasn",
          "Sasni",
          "Sikndra Rao",
          "Hasayan",
          "Sadabad",
          "Sahpau",
        ])
        break
      case "Kasganj":
        setLocation([
          "Kasganj",
          "Soron",
          "Patiyali",
          "Ganjdundwara",
          "Sidhpura",
          "Sahawar",
          "Amanpur",
        ])
        break
      case "Agra":
        setLocation([
          "Achnera",
          "Fatehpur Sikri",
          "Akola",
          "Bichpuri",
          "Baroli Ahir",
          "Khandoli",
          "Etmadpur",
          "Jagner",
          "Kheragarh",
          "Sainyan",
          "Shamsabad",
          "Fatehabad",
          "Pinahat",
          "Bah",
          "Jaitpur Kalan",
        ])
        break
      case "Mathura":
        setLocation([
          "NandGaon",
          "ChhataChaumuha",
          "Goverdhan",
          "Mathura",
          "Farah",
          "Raya",
          "Baldeo",
          "Naujheel",
          "Mant",
        ])
        break
      case "Mainpuri":
        setLocation([
          "Barnahal",
          "Mainpuri",
          "Bewar",
          "Ghiror",
          "Jageer",
          "Karhal",
          "Kishni",
          "Kuraoli",
          "Sultanganj",
        ])
        break
      case "Firozabad":
        setLocation([
          "Firozabad",
          "Shikohabad",
          "Tundla",
          "Jasrana",
          "Eka",
          "Narkhi",
          "Madanpur",
          "AraonHathwant",
        ])
        break
      case "Azamgarh":
        setLocation([
          "Ahiraula",
          "Atrauliya",
          "Azamatgarh",
          "Bilariyaganj",
          "Hariya",
          "Jahanaganj",
          "Koilsa",
          "Lalganj",
          "Maharajganj",
          "Martinganj",
          "Mehnagar",
          "Mirzapur",
          "Mohammadpur",
          "Tehbarpur",
          "Palhna",
          "Palhani",
          "Pawai",
          "Phoolpur",
          "Rani Ki Sarai",
          "Sathiyaon Tarwa",
          "Thekma",
        ])
        break
      case "Ballia":
        setLocation([
          "Bansdih",
          "Belhari",
          "Beruarwari",
          "Chilkahar",
          "Dubhad",
          "Garwar",
          "Hanumanganj",
          "Maniyar",
          "Murli Chhapra",
          "Nagra",
          "Navanagar",
          "Pandah",
          "Rasra",
          "Revati",
          "Siar",
          "Sohaon",
          "Bairia",
        ])
        break
      case "Mau":
        setLocation([
          "Badraon",
          "Dohri ",
          "Ghat",
          "Fatehpur Madaun",
          "Ghosi Kopaganj",
          "Mohammadabad Gohana",
          "Pardaha",
          "Ranipur",
          "Ratanpura",
        ])
        break
      case "Prayagraj":
        setLocation([
          "Kaurihar",
          "Soraon",
          "Holagarh",
          "Mauaima",
          "Soraon",
          "Bahariya",
          "Phulpur",
          "Bahadurpur",
          "Pratappur",
          "Saidabad",
          "Dhanupur",
          "Handia",
          "Jasra",
          "Shankargarh  ",
          "Chaka",
          "Karchhana",
          "Kaundhiyara",
          "Uruwa",
          "Meja",
          "Koraon",
          "Manda   ",
          "Sahson",
          "Shringverpur Dham",
          "Bara",
        ])
        break
      case "Fatehpur":
        setLocation([
          "Asothar",
          "Fatehpur",
          "Bahua",
          "Bhitaura",
          "Haswa",
          "Teliyani",
          "Amauli",
          "Deomai",
          "Khajuha",
          "Malwan",
          "Airaya Dhata",
          "Hathgam",
          "Vijayipur",
        ])
        break
      case "Kaushambi":
        setLocation([
          "Chail",
          "Kara",
          "Kaushambi",
          "Manjhanpur",
          "Mooratganj",
          "Nevada",
          "Sarsawan ",
          "Sirathu",
        ])
        break
      case "Pratapgarh":
        setLocation([
          "Babaganj",
          "Bihar",
          "Kalakankar",
          "Rampur Sangramgarh",
          "Sangipur",
          "Laxmanpur",
          "Mandhata ",
          "Sandwachandrika",
          "Aspurdeosara",
          "Baba Belkhar Nath Dham",
          "Mangrora",
          "Shivgarh",
          "Gaura",
          "Sadar  ",
          "Patti",
          "Kunda",
          "Lalganj",
        ])
        break
      case "Bareilly":
        setLocation([
          "Aalampur Jafarabad",
          "Baheri",
          "Bhadpura",
          "Bhojipura",
          "Bhuta",
          "Bithiri Chainpur",
          "Damkhauda ",
          "Faridpur",
          "Fatehganj West",
          "Kyara",
          "Majhgawan",
          "Mirganj",
          "Nawabganj",
          "Ramnagar  ",
          "Shergarh",
        ])
        break
      case "Pilibhit":
        setLocation([
          "Amariya",
          "Barkhera",
          "Bilsanda",
          "Bisalpur",
          "Lalaurikhera",
          "Marori",
          "Puranpur",
        ])
        break
      case "Shahjahanpur":
        setLocation([
          "Banda",
          "Khutar",
          "Powayan",
          "Sindhauli",
          "Katra Khudaganj",
          "Jaitipur",
          "Tilhar",
          "Nigohi",
          "Kanth",
          "Dadraul",
          "Bhawalkhera",
          "Madnapur",
          "Kalan",
          "Mirzapur",
          "Jalalabad",
        ])
        break
      case "Badaun":
        setLocation([
          "Ambiapur",
          "Asafpur",
          "Bisauli",
          "Dehgwan",
          "Dataganj",
          "Islamnagar",
          "Jagat ",
          "Mion",
          "Qadarchowk",
          "Sahaswan",
          "Salarpur",
          "Samrer",
          "Ujhani",
          "Usawan ",
          "Wazirganj",
        ])
        break
      case "Basti":
        setLocation([
          "Basti",
          "Bahadurpur",
          "Bankati",
          "Gaur",
          "Harraiya",
          "Kaptanganj",
          "Kudaraha ",
          "Paras Rampur",
          "Ramnagar",
          "Rudhauli ",
          "Saltaua Gopalpur",
          "Sau Ghat",
          "Vikramjot",
          "Dubauliya",
        ])
        break
      case "Sant Kabir Nagar":
        setLocation([
          "Mehdawal",
          "Baghauli",
          "Pauli",
          "Semariyaw",
          "Santha",
          "Nathnagar",
          "Khalilabad",
          "Belhar",
          "Hainsar Bazar",
        ])
        break
      case "Siddharthnagar":
        setLocation([
          "Naugarh",
          "Barhni",
          "Shohartgarh",
          "Birdpur",
          "Jogia",
          "Uska Bazar",
          "Bansi ",
          "Khesraha",
          "Bhanwapur",
          "Itwa",
          "Khuniyaon",
          "Dumariyaganj",
          "Lotan",
          "Methwal",
        ])
        break
      case "Bahraich":
        setLocation([
          "Hujurpur",
          "Mahasi",
          "Pakharpur",
          "Chittaura",
          "Mihinpurwa",
          "Shivpur",
          "Risia ",
          "Visheshwarganj",
          "Jarwal",
          "Nawabganj",
          "Tejwapur",
          "Kaisarganj",
          "Balha",
          "Payagpur",
        ])
        break
      case "Balarampur":
        setLocation([
          "Harriya Satgharwa",
          "Balrampur",
          "Tulsipur",
          "Gainsari",
          "Pachperwa",
          "Sridattganj",
          "Utraula  ",
          "Gaindas Bujurg",
          "Rehra Bazar",
        ])
        break
      case "Gonda":
        setLocation([
          "Babhanjot",
          "Belsar",
          "Chhapia",
          "Colonelganj",
          "Haldharmau",
          "Itia Thok",
          "Jhanjhari  ",
          "Katra ",
          "Bazar",
          "Mankapur",
          "Mujehana",
          "Nawabganj",
          "Pandri ",
          "Kripal",
          "Paraspur",
          "Rupaidih    ",
          "Tarabganj",
          "Wazirganj",
        ])
        break
      case "Shravasti":
        setLocation([
          "Hariharpur Rani",
          "Sirsiya",
          "Jamunaha",
          "Ikauna",
          "Gilaula",
        ])
        break
      case "Ayodhya":
        setLocation([
          "Masodha",
          "Sohawal",
          "Bikapur",
          "Milkipur",
          "MayaBazar",
          "PuraBazar",
          "Haringtonganj",
          "Amaniganj",
          "Tarun",
          "Mawai",
          "Rudauli",
        ])
        break
      case "Ambedkar Nagar":
        setLocation([
          "Akbarpur",
          "Baskhari",
          "Bhiti",
          "Bhiyaon",
          "Jahageerganj",
          "Jalalpur",
          "Katehari ",
          "Ramnagar",
          "Tanda",
        ])
        break
      case "Barabanki":
        setLocation([
          "Banki",
          "Masauli",
          "Dewa",
          "Harakh",
          "Fatehpur",
          "Haidergarh",
          "Dariyabad",
          "Suratganj",
          "Siddhaur",
          "Pure Dalai",
          "Nindura",
          "Trivediganj",
          "Ramnagar",
          "Sirauli Ghauspur",
          "Banikodar",
        ])
        break
      case "Sultanpur":
        setLocation([
          "Dubeypur",
          "Kurebhar",
          "Kurwar",
          "Bhadaiyan",
          "Lambhua",
          "Pratappur Kamaicha",
          "Jaisinghpur ",
          "Motigarpur",
          "Karaundi kalan",
          "Kadipur",
          "Dostpur",
          "Akhandnagar",
          "Dhanpatganj",
          "Baldirai",
        ])
        break
      case "Amethi":
        setLocation([
          "Amethi",
          "Gauriganj",
          "Musafirkhana",
          "Tiloi",
          "Jagdishpur",
          "Bazar Shukul",
          "Bhetua",
          "Bhadar",
          "Sangrampur",
          "Shahgarh",
          "Jamo",
          "Singhpur",
          "Bhadurpur ",
        ])
        break
      case "Banda":
        setLocation([
          "Badokhar Khurd",
          "Banda",
          "Mahuva",
          "Naraini",
          "Baberu",
          "Kamasin",
          "Jaspura ",
          "Tindwari",
        ])
        break
      case "Chitrakoot":
        setLocation(["Karwi", "Mau", "Pahari", "Ramnagar", "Manikpur"])
        break
      case "Hamirpur":
        setLocation([
          "Hamirpur",
          "Nadaun",
          "Bijhari",
          "Bhoranj",
          "Sujanpur",
          "Bamson",
        ])
        break
      case "Mahoba":
        setLocation(["Kabrai", "Charkhari", "Jaitpur", "Panwari"])
        break
      case "Deoria":
        setLocation([
          "Baitalpur",
          "Bankata",
          "Barhaj",
          "Bhaluani",
          "Bhagalpur",
          "Bhatni",
          "Bhatparrani ",
          "Deoria Sadar",
          "Desahi Deoria",
          "Gauri Bazar",
          "Lar",
          "Pathardeva",
          "Rampur Karkhana",
          "Rudrapur ",
          "Salempur",
          "Tarkulwa",
        ])
        break
      case "Gorakhpur":
        setLocation([
          "Campierganj",
          "Jungle Kaudia(Partial)",
          "Sadar",
          "Sahjanwa",
          "Khajni",
          "Chauri Chaura",
          "Bansgaon",
          "Gola",
          "Chargawa",
          "Khorabar",
          "Bhathat",
          "Pipraich",
          "Sahjanwa ",
          "Pali",
          "Piprauli",
          "Khajni",
          "Belghat",
          "SardarNagar",
          "Brahmpur",
          "Bansgaon",
          "Kauriram",
          "Gagaha",
          "Gola",
          "Barhalganj",
          "Uruwa",
        ])
        break
      case "Kushinagar":
        setLocation([
          "Tamkuhi",
          "Dudahi",
          "Seorahi",
          "Kasia",
          "Fazilnagar",
          "Hata",
          "Motichak",
          "Sukrauli",
          "Vishnupura",
          "Padrauna",
          "Khadda",
          "Nebua Naurangiya",
          "Captainganj",
          "Ramkola",
        ])
        break
      case "Maharajganj":
        setLocation([
          "Brijmanganj",
          "Dhani",
          "Partawal",
          "Paniyara",
          "Lakshmipur",
          "Ghughali",
          "Mithaura",
          "Nautanwa",
          "Pharenda",
          "Nichlaul",
          "Sadar",
          "Siswa",
        ])
        break
      case "Auraiya":
        setLocation([
          "Auraiya ",
          "Bhagaynagar ",
          "Sahar ",
          "Achalda ",
          "Etwakatra ",
          "Bidhuan ",
          "Ajitmal",
        ])
        break
      case "Etawah":
        setLocation([
          "Barhpur",
          "Basrehar",
          "Jaswantnagar",
          "Mahewa",
          "Saifai",
          "Chakarnagar",
          "Takha ",
          "Bharthana",
        ])
        break
      case "Farrukhabad":
        setLocation([
          "Kamalganj",
          "Mohammadabad",
          "Kaimganj",
          "Nawabganj",
          "Shamshabad",
          "Rajepur",
        ])
        break
      case "Kannauj":
        setLocation([
          "Chibramau",
          "Gugrapur",
          "Haseran",
          "Jalalabad",
          "Kannauj",
          "Saurikh",
          "Talgram",
          "Umarda",
        ])
        break
      case "Kanpur Dehat":
        setLocation([
          "Akbarpur ",
          "Maitha",
          "Sarvankheda",
          "Jhinjhak",
          "Rasulabad",
          "Amraudha",
          "Malasa ",
          "Sandalpur",
          "Rajpur",
        ])
        break
      case "Kanpur Nagar":
        setLocation([
          "Kakwan",
          "Bilhaur",
          "Shivrajpur",
          "Chaubeypur",
          "Kalyanpur",
          "Vidhnu",
          "Sarsaul",
          "Bhitargaon",
          "Patara",
          "Ghatampur",
        ])
        break
      case "Jalaun":
        setLocation([
          "Rampura",
          "Kuthaund",
          "Madhogarh",
          "Nadigaon",
          "Jalaun",
          "Mahewa",
          "Kadaura ",
          "Dakore",
          "Konch",
        ])
        break
      case "Jhansi":
        setLocation([
          "Babina",
          "Badagaon",
          "Bamaur ",
          "Bangra",
          "Chirgaon",
          "Gursrai",
          "Mauranipur",
          "Moth",
        ])
        break
      case "Lalitpur":
        setLocation([
          "Talbehat",
          "Jakhaura",
          "Bar",
          "Birdha",
          "Mehroni",
          "Madawra",
        ])
        break
      case "Hardoi":
        setLocation([
          "Ahirori",
          "Bawan",
          "Behadar",
          "Bharawan",
          "Bharkhani",
          "Bilgram",
          "Hariyawan",
          "Harpalpur",
          "Kachhauna",
          "Kothawan",
          "Madhoganj",
          "Mallawan",
          "Pihani",
          "Sandi",
          "Sandila",
          "Shahabad",
          "Sursa",
          "Tadiyawan",
          "Tondarpur",
        ])
        break
      case "Lakhimpur Kheri":
        setLocation([
          "Lakhimpur",
          "Behjam",
          "Mitauli",
          "Pasgawan",
          "Gola",
          "Bankeyganj",
          "Bijuwa",
          "Paliya",
          "Issanagar",
          "Dhaurahara",
          "Nakaha",
          "Phoolbehar",
          "Ramiyabehar",
          "Nighasan",
          "Mohammdi",
        ])
        break
      case "Lucknow":
        setLocation([
          "Mall",
          "Malihabad",
          "Chinhat",
          "Bakhshi Ka Talab",
          "Kakori",
          "Gosain ganj",
          "Sarojni nagar",
          "Mohanlal Ganj",
        ])
        break
      case "Raebareli":
        setLocation([
          "Amawan",
          "Bachhrawan",
          "Sataon",
          "Dalmau",
          "Harchandpur",
          "Kheeron",
          "Lalganj",
          "Maharajganj",
          "Jagatpur",
          "Rahi",
          "Rohaniya",
          "Sareni",
          "Shivgarh",
          "Deen Shah Gaura",
          "Unchahar",
          "Deeh",
          "Chatoh",
          "Salon",
        ])
        break
      case "Sitapur":
        setLocation([
          "Ailiya",
          "Behta",
          "Biswan",
          "Gondlamau",
          "Hargaon",
          "Kasmanda",
          "Khairabad",
          "Laharpur",
          "Machhrehta",
          "Mahmudabad",
          "Maholi",
          "Misrikh",
          "Pahala",
          "Parsendi",
          "Pisawan",
          "Rampur ",
          "Mathura",
          "Reusa",
          "Sakran",
          "Sidhauli",
        ])
        break
      case "Unnao":
        setLocation([
          "Asoha",
          "Auras",
          "Bangarmau",
          "Bichhiya",
          "Bighapur",
          "Fatehpur Chaurasi",
          "Ganj Moradabad",
          "Hasanganj",
          "Hilauli",
          "Mianganj",
          "Nawabganj",
          "Purwa",
          "Safipur",
          "Sikandarpur Karan",
          "Sikandarpur Sarausi",
          "Sumerpur",
        ])
        break
      case "Mirzapur":
        setLocation([
          "Chhanbey",
          "City",
          "Hallia",
          "Jamalpur",
          "Kon",
          "Lalganj",
          "Majhawan",
          "Narayanpur",
          "Pahari",
          "Patehara",
        ])
        break
      case "Sant Ravidas Nagar":
        setLocation([
          "Abholi",
          "Deegh",
          "Suriyawan",
          "Gyanpur",
          "Aurai",
          "Bhadohi",
        ])
        break
      case "Sonbhadra":
        setLocation([
          "Robertsganj",
          "Ghorawal",
          "Chatra",
          "Nagwa",
          "Chopan",
          "Babhani",
          "Myorpur",
          "Duddhi",
          "Karma",
          "Kone",
        ])
        break
      case "Baghpat":
        setLocation([
          "Baghpat",
          "Khekra",
          "Baraut",
          "Chhaprauli",
          "Binauli",
          "Pilana",
        ])
        break
      case "Bulandshahar":
        setLocation([
          "Bulandshahr",
          "Agauta",
          "Gulaothi",
          "Lakhaoti",
          "Sikandrabad",
          "Khurja",
          "Arnia",
          "Anoopshahr",
          "Jhangirabad",
          "Shikarpur",
          "Pahasu",
          "Siyana",
          "Unchagaon",
          "B B Nagar",
          "DibaiDanpur",
        ])
        break
      case "Gautam Buddh Nagar":
        setLocation(["Bisrakh", "Dadri", "Dankaur", "Jewar"])
        break
      case "Ghaziabad":
        setLocation(["Rajapur", "Bhojpur", "Muradnagar", "Loni"])
        break
      case "Meerut":
        setLocation([
          "Jaani",
          "Meerut",
          "Kharkhoda",
          "Rajpura",
          "Rohta",
          "Hastinapur",
          "Machara",
          "Mawana",
          "Parikshitgarh",
          "Daurala",
          "Sardhana",
          "Saroorpur",
        ])
        break
      case "Hapur":
        setLocation(["Garhmukteshwar", "Dahaulana", "Simbhawali", "Hapur"])
        break
      case "Bijnor":
        setLocation([
          "Mohammadpur Deomal",
          "Haldaur",
          "Kiratpur",
          "Najibabad",
          "Kotwali",
          "Nehtaur",
          "Noorpur",
          "Dhampur",
          "Afzalgarh",
          "Sehora",
          "Jalilpur",
        ])
        break
      case "Amroha":
        setLocation([
          "Amroha",
          "Joya",
          "Hasanpur",
          "Dhanaura",
          "Gajraula",
          "Gangeshwari",
        ])
        break
      case "Moradabad":
        setLocation([
          "Moradabad",
          "Mundapandey",
          "Bhagatpur Tanda",
          "Bilari",
          "Kundarki",
          "Kanth",
          "Chajlet",
          "Thakurdwara",
          "Dilari",
        ])
        break
      case "Rampur":
        setLocation([
          "Bilaspur",
          "Chamrawa",
          "Milak",
          "Saidnagar",
          "Shahabad",
          "Swar",
        ])
        break
      case "Sambhal":
        setLocation([
          "Behjoi",
          "Sambhal",
          "Asmoli",
          "Rajpura",
          "Gunnaur",
          "Baniyakheda",
          "Junavi",
          "Panwasa",
        ])
        break
      case "Chandauli":
        setLocation([
          "Barahani",
          "Chandauli",
          "Niyamatabad",
          "Chahaniya",
          "Sakaldiha",
          "Dhanapur",
          "Chakia",
          "Shahabganj",
          "Naugarh",
        ])
        break
      case "Ghazipur":
        setLocation([
          "Ghazipur",
          "Virno",
          "Karanda",
          "Mardah",
          "Zamania",
          "Bhadaura",
          "Reotipur ",
          "Saidpur",
          "Deokali",
          "Sadat",
          "Jakhania",
          "Manihari",
          "Mohammadabad",
          "Bhanwarkol ",
          "Kasimabad",
          "Barachawar",
        ])
        break
      case "Jaunpur":
        setLocation([
          "Badlapur",
          "Baksha",
          "Barasathi",
          "Dharmapur",
          "Dobhi",
          "Jalalpur",
          "Karanjakala",
          "Kerakat",
          "Khuthan",
          "Machhli Shahar",
          "Maharajganj",
          "Mariyahu",
          "Muftiganj",
          "Mungara Badshahpur",
          "Ramnagar",
          "Rampur",
          "Shahganj",
          "Sikarara",
          "Sirkoni",
          "Suithakala",
          "Sujanganj",
        ])
        break
      case "Varanasi":
        setLocation([
          "Arajiline",
          "Baragaon",
          "Chirai Gaon",
          "Cholapur",
          "Harhua",
          "Kashi Vidya Peeth",
          "Pindara",
          "Sewapuri",
        ])
        break
      case "Muzaffarnagar":
        setLocation([
          "Sadar – Kukda",
          "Budhana",
          "Baghra",
          "Shahpur",
          "Purquazi",
          "Charthawal",
          "Morna",
          "Jansath",
          "Khatauli",
        ])
        break
      case "Saharanpur":
        setLocation([
          "Behat",
          "Sadholi Kadeem",
          "Saharanpur",
          "Muzaffarabad",
          "Punwarka",
          "Balia ",
          "Kheri",
          "Sarsawan",
          "Nakur",
          "Gangoh",
          "Rampur ",
          "Maniharan",
          "Nagal",
          "Nanauta",
          "Deoband",
        ])
        break
      case "Shamli":
        setLocation(["Shamli", "Thanabhawan", "Kandhala", "Kairana", "Uun"])
        break

      default:
        setLocation([])
    }
  }

  const setStokistLocation = (val) => {
    switch (val) {
      case "Patna":
        setLocationStock([
          "Danapur Sadan",
          "Jehanabad (District)",
          "Arwal (District)",
          "Paliganj",
        ])
        break
      case "Gaya":
        setLocationStock([
          "Gaya (District)",
          "Aurangabad (District)",
          "Rohtas (District)",
          "Kaimur (District)",
          "Buxar (District)",
          "Arrah(Bhojpur) (District)",
        ])
        break
      case "Nawada":
        setLocationStock([
          "Biharsharif/Nalanda (District)",
          "Sheikhpura (District)",
        ])
        break
      case "Jamui":
        setLocationStock([
          "Lakhisarai (District)",
          "Munger (District)",
          "Begusarai (District)",
        ])
        break
      case "Purnia":
        setLocationStock(["Katihar  (District)", "Banka  (District)"])
        break
      case "Vaishali":
        setLocationStock([
          "Muzzafarpur (District)",
          "Vaishali (District)",
          "Samastipur (District)",
          "Darbhanga (District)",
        ])
        break
      case "East Champaran":
        setLocationStock([
          "West Champaran (District)",
          "Sheohar (District)",
          "Sitamarhi (District)",
          "East Champaran (District)",
        ])
        break
      case "Madhepura":
        setLocationStock([
          "Saharsa (District)",

          "Madhubani (District)",

          "Khagaria (District)",
          "Supaul (District)",
          "Kishanganj (District)",
          "Araria (District)",

          "Madhepura  (District)",
        ])
        break
      case "Siwan":
        setLocationStock([
          "Gopalganj (District)",

          "Siwan (District)",
          "Chapra (District)",
        ])
        break
      case "Bhagalpur":
        setLocationStock([" Bhagalpur (District)"])
        break
      case "Aligarh":
        setLocationStock(["Aligarh", "Etah", "Hathras", "Kasganj"])
        break
      case "Agra":
        setLocationStock(["Agra", "Mathura", "Mainpuri", "Firozabad"])
        break
      case "Azamgarh":
        setLocationStock(["Azamgarh", "Ballia", "Mau"])
        break
      case "Prayagraj":
        setLocationStock(["Prayagraj", "Fatehpur", "Kaushambi", "Pratapgarh"])
        break
      case "Bareilly":
        setLocationStock(["Bareilly", "Pilibhit", "Shahjahanpur", "Badaun"])
        break
      case "Basti":
        setLocationStock(["Basti", "Sant Kabir Nagar", "Siddharthnagar"])
        break
      case "Gonda":
        setLocationStock(["Bahraich", "Balarampur", "Gonda", "Shravasti"])
        break
      case "Ayodhya":
        setLocationStock([
          "Ayodhya",
          "Ambedkar Nagar",
          "Barabanki",
          "Sultanpur",
          "Amethi",
        ])
        break
      case "Banda":
        setLocationStock(["Banda", "Chitrakoot", "Hamirpur", "Mahoba"])
        break
      case "Gorakhpur":
        setLocationStock(["Deoria", "Gorakhpur", "Kushinagar", "Maharajganj"])
        break
      case "Kanpur":
        setLocationStock([
          "Auraiya",
          "Etawah",
          "Farrukhabad",
          "Kannauj",
          "Kanpur Dehat",
          "Kanpur Nagar",
        ])
        break
      case "Jhansi":
        setLocationStock(["Jalaun", "Jhansi", "Lalitpur"])
        break
      case "Lucknow":
        setLocationStock([
          "Hardoi",
          "Lakhimpur Kheri",
          "Lucknow",
          "Raebareli",
          "Sitapur",
          "Unnao",
        ])
        break
      case "Mirzapur":
        setLocationStock(["Mirzapur", "Sant Ravidas Nagar", "Sonbhadra"])
        break
      case "Meerut":
        setLocationStock([
          "Baghpat",
          "Bulandshahar",
          "Gautam Buddh Nagar",
          "Ghaziabad",
          "Meerut",
          "Hapur",
        ])
        break
      case "Moradabad":
        setLocationStock(["Bijnor", "Amroha", "Moradabad", "Rampur", "Sambhal"])
        break
      case "Varanasi":
        setLocationStock(["Chandauli", "Ghazipur", "Jaunpur", "Varanasi"])
        break
      case "Saharanpur":
        setLocationStock(["Muzaffarnagar", "Saharanpur", "Shamli"])
        break

      default:
        setLocationStock([])
    }
  }

  return (
    <FormWrapper title="BECOME A PART OF OUR DISTRIBUTION CHANNEL">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}>
          Personal Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />
      <div style={{ width: "500px" }}>
        <label>Applicant's Name (आवेदक का नाम)</label>
        <br />
        <input
          required
          type="text"
          onChange={(e) => dispatch(changeName(e.target.value))}
          placeholder="Type your name (अपना नाम लिखो)"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Applicant's Email (आवेदक का ईमेल) </label>
        <br />
        <input
          required
          type="email"
          onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Type your email (अपना ईमेल लिखो)"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Address (पता)</label>
        <br />
        <input
          required
          type="text"
          onChange={(e) => dispatch(changeApplicantAddress(e.target.value))}
          placeholder="Type your address"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>State (राज्य)</label>
        <br />
        <input
          required
          type="text"
          // onChange={(e) => dispatch(changeApplicantAddress(e.target.value))}
          placeholder="Type your state"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Pincode (पिन कोड)</label>
        <br />
        <input
          required
          type="number"
          // onChange={(e) => dispatch(changeApplicantAddress(e.target.value))}
          placeholder="Type your pincode"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Applicant's Mobile No. (आवेदक मोबाइल नं.)</label>
        <br />
        <input
          required
          type="number"
          onChange={(e) => dispatch(changeMobileNumber(e.target.value))}
          placeholder="Type Contact No."
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>Extra Info (अतिरिक्त जानकारी)</label>
        <br />
        <textarea
          required
          rows={5}
          cols={80}
          type="text"
          // onChange={(e) => dispatch(changeApplicantAddress(e.target.value))}
          placeholder="Type Extra Info"
        />
      </div>

      <div style={{ width: "450px" }}></div>

      <div style={{ width: "500px", marginTop: "30px" }}>
      <label style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}>
          Application Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />
      <div style={{ width: "500px" }}>
        <label>Application (आवेदन)</label>
        <br />
        <select
          required
          onChange={(e) => {
            changeHandler(e.target.value)
            dispatch(changeApplicantType(e.target.value))
          }}
        >
          <option value={""} disabled selected>
            Select Application (चुनें)
          </option>
          <option value={"DISTRIBUTOR"}>Distributor (डिस्ट्रीब्यूटर)</option>
          <option value={"STOCKIST"}>Stockist (स्टॉकिस्ट)</option>
          {/*  <option value={application}>
            I am Interested for SuperMart Project (मुझे सुपरमार्ट प्रोजेक्ट में
              दिलचस्पी है)
              </option>
            <option value={application}>Other (अन्य)</option> */}
        </select>
      </div>
      {!isFirm && (
        <div style={{ width: "450px" }}>
          <label>Do you have a firm? (क्या आपके पास फर्म है?)</label>
          <br />
          <button
            style={{ padding: "5px", margin: "15px 0 0 0" }}
            onClick={() => {
              changeFirm()
            }}
          >
            Yes
          </button>
        </div>
      )}
      {isFirm && (
        <div style={{ width: "450px" }}>
          <label>Firm Name (फर्म का नाम)</label>
          <br />
          <input
            //required
            type="text"
            onChange={(e) => dispatch(changeFirmName(e.target.value))}
            placeholder="Type Firm's Name"
          />
        </div>
      )}
      {/* <div style={{ width: "500px" }}>
        <label>Partner Type (साथी का प्रकार)</label>
        <br />
        <select>
        <option  value={""} disabled selected>
        Select Type (चुनें)
        </option>
        <option value={partnerType}>Stockist</option>
        <option value={partnerType}>Distributor</option>
        <option value={partnerType}>SuperMart</option>
        
        </select>
      </div> */}
      {/* {partner && (
        <div style={{ width: "500px", marginTop: "30px" }}>
        <label
        style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
        >
        More Details
        </label>
        </div>
        )}
        {partner && <div style={{ width: "450px" }}></div>}
        {partner && <hr />}
      {partner && <hr />} */}
      {partner && (
        <div style={{ width: "500px" }}>
          <label>State (राज्य)</label>
          <br />
          <select
            required
            onChange={(e) => {
              changeStateIndia(e.target.value)
              dispatch(changeState(e.target.value))
            }}
          >
            <option disabled value={""} selected>
              Select State (चुनें)
            </option>

            <option value={"Bihar"}>Bihar</option>
            <option value={"UP"}>Uttar Pradesh (UP)</option>
          </select>
        </div>
      )}
      {partner === "STOCKIST" &&
        (stateIndia === "Bihar" ? (
          <div style={{ width: "450px" }}>
            <label>Location (जगह)</label>
            <br />
            <select
              required
              onChange={(e) => {
                setStokistLocation(e.target.value)
                changeDistricts(e.target.value)
                dispatch(changeDistrict(e.target.value))
              }}
            >
              <option value={""} disabled selected>
                Select Location (जगह चुनें)
              </option>
              <option value={"Patna"}>Patna (District)</option>
              <option value={"Gaya"}>Gaya (District)</option>
              <option value={"Nawada"}>Nawada (District)</option>
              <option value={"Jamui"}>Jamui (District)</option>
              <option value={"Bhagalpur"}>Bhagalpur (District)</option>
              <option value={"Purnia"}>Purnia (District)</option>
              <option value={"Vaishali"}>Vaishali (District)</option>]
              <option value={"East Champaran"}>
                East Champaran (District)
              </option>
              <option value={"Madhepura"}>Madhepura (District)</option>
              <option value={"Siwan"}>Siwan (District)</option>
              {/* <option value={"Patna"}>Patna</option>
              <option value={"Gaya"}>Gaya</option>
              <option value={"Buxar"}>Buxar</option>
              <option value={"Nalanda"}>Nalanda</option>
              <option value={"Jamui"}>Jamui</option>
              <option value={"Bhagalpur"}>Bhagalpur</option>
              <option value={"Purnia"}>Purnia</option>
              <option value={"Vaishali"}>Vaishali</option>
              <option value={"WestChamparan"}>West Champaran</option>
              <option value={"EastChamparan"}>East Champaran</option>
              <option value={"EastChamparan"}>East Champaran</option>
              <option value={"Sitamarhi"}>Sitamarhi</option>
              <option value={"Madhepura"}>Madhepura</option>
              <option value={"Siwan"}>Siwan</option> */}
            </select>
          </div>
        ) : (
          <div style={{ width: "450px" }}>
            <label>Location (जगह)</label>
            <br />
            <select
              required
              onChange={(e) => {
                setStokistLocation(e.target.value)
                changeDistricts(e.target.value)
                dispatch(changeDistrict(e.target.value))
              }}
            >
              <option value={""} disabled selected>
                Select Location (जगह चुनें)
              </option>
              <option value={"Aligarh"}>Aligarh division</option>
              <option value={"Agra"}>Agra division</option>
              <option value={"Azamgarh"}>Azamgarh division</option>
              <option value={"Prayagraj"}>Prayagraj division</option>
              <option value={"Bareilly"}>Bareilly division</option>
              <option value={"Basti"}>Basti division</option>
              <option value={"Gonda"}>Gonda division</option>
              <option value={"Ayodhya"}>Ayodhya division</option>
              <option value={"Banda"}>Banda</option>
              <option value={"Gorakhpur"}>Gorakhpur</option>
              <option value={"Kanpur"}>Kanpur</option>
              <option value={"Jhansi"}>Jhansi</option>
              <option value={"Lucknow"}>Lucknow</option>
              <option value={"Mirzapur"}>Mirzapur</option>
              <option value={"Meerut"}>Meerut division</option>
              <option value={"Moradabad"}>Moradabad division</option>
              <option value={"Varanasi"}>Varanasi</option>
              <option value={"Saharanpur"}>Saharanpur</option>
            </select>
          </div>
        ))}
      {partner === "DISTRIBUTOR" &&
        (stateIndia === "Bihar" ? (
          <div style={{ width: "450px" }}>
            <label>Location (जगह)</label>
            <br />
            <select
              required
              onChange={(e) => {
                setRetailLocation(e.target.value)
                changeDistricts(e.target.value)
                dispatch(changeDistrict(e.target.value))
              }}
            >
              <option value={""} disabled selected>
                Select District (चुनें)
              </option>
              <option value={"Danapur"}>Danapur Sadan</option>
              <option value={"Jehanabad"}>Jehanabad (District)</option>
              <option value={"Arwal"}>Arwal (District)</option>
              <option value={"Paliganj"}>Paliganj</option>

              <option value={"Gaya"}>Gaya (District)</option>
              <option value={"Aurangabad"}>Aurangabad (District)</option>
              <option value={"Rohtas"}>Rohtas (District)</option>
              <option value={"Kaimur"}>Kaimur (District)</option>
              <option value={"Buxar"}>Buxar (District)</option>
              <option value={"Arrah"}>Arrah(Bhojpur) (District)</option>

              <option value={"Biharsharif"}>
                Biharsharif/Nalanda (District)
              </option>
              <option value={"Sheikhpura"}>Sheikhpura (District)</option>

              <option value={"Lakhisarai"}>Lakhisarai (District)</option>
              <option value={"Munger"}>Munger (District)</option>
              <option value={"Begusarai"}>Begusarai (District)</option>

              <option value={"Bhagalpur"}>Bhagalpur (District)</option>

              <option value={"Katihar"}>Katihar (District)</option>
              <option value={"Banka"}>Banka (District)</option>

              <option value={"Muzaffarpur"}>Muzaffarpur (District)</option>
              <option value={"Vaishali"}>Vaishali (District)</option>
              <option value={"Samastipur"}>Samastipur (District)</option>
              <option value={"Darbhanga"}>Darbhanga (District)</option>

              <option value={"West Champaran"}>
                West Champaran (District)
              </option>
              <option value={"Sheohar"}>Sheohar (District)</option>
              <option value={"Sitamarhi"}>Sitamarhi (District)</option>
              <option value={"East Champaran"}>
                East Champaran (District)
              </option>

              <option value={"Saharsa"}>Saharsa (District)</option>
              <option value={"Madhubani"}>Madhubani (District)</option>
              <option value={"Khagaria"}>Khagaria (District)</option>
              <option value={"Supaul"}>Supaul (District)</option>
              <option value={"Kishanganj"}>Kishanganj (District)</option>
              <option value={"Araria"}>Araria (District)</option>
              <option value={"Madhepura"}>Madhepura (District)</option>

              <option value={"Gopalganj"}>Gopalganj (District)</option>
              <option value={"Siwan"}>Siwan (District)</option>
              <option value={"Chapra"}>Chapra (District)</option>
            </select>
          </div>
        ) : (
          //UP
          <div style={{ width: "450px" }}>
            <label>District (ज़िला)</label>
            <br />
            <select
              required
              onChange={(e) => {
                setRetailLocation(e.target.value)

                changeDistricts(e.target.value)
                dispatch(changeDistrict(e.target.value))
              }}
            >
              <option value={""} disabled selected>
                Select District (चुनें)
              </option>
              <option value={"Aligarh"}>Aligarh (District)</option>
              <option value={"Etah"}>Etah (District)</option>
              <option value={"Hathras"}>Hathras (District)</option>
              <option value={"Kasganj"}>Kasganj (District)</option>

              <option value={"Agra"}>Agra (District)</option>
              <option value={"Mathura"}>Mathura (District)</option>
              <option value={"Mainpuri"}>Mainpuri (District)</option>
              <option value={"Firozabad"}>Firozabad (District)</option>

              <option value={"Azamgarh"}>Azamgarh (District)</option>
              <option value={"Ballia"}>Ballia (District)</option>
              <option value={"Mau"}>Mau (District)</option>

              <option value={"Prayagraj"}>Prayagraj (District)</option>
              <option value={"Fatehpur"}>Fatehpur (District)</option>
              <option value={"Kaushambi"}>Kaushambi (District)</option>
              <option value={"Pratapgarh"}>Pratapgarh (District)</option>

              <option value={"Bareilly"}>Bareilly (District)</option>
              <option value={"Pilibhit"}>Pilibhit (District)</option>
              <option value={"Shahjahanpur"}>Shahjahanpur (District)</option>
              <option value={"Badaun"}>Badaun (District)</option>

              <option value={"Basti"}>Basti (District)</option>
              <option value={"Sant Kabir Nagar"}>
                Sant Kabir Nagar (District)
              </option>
              <option value={"Siddharthnagar"}>
                Siddharthnagar (District)
              </option>

              <option value={"Bahraich"}>Bahraich (District)</option>
              <option value={"Balarampur"}>Balarampur (District)</option>
              <option value={"Gonda"}>Gonda (District)</option>
              <option value={"Shravasti"}>Shravasti (District)</option>

              <option value={"Ayodhya"}>Ayodhya (District)</option>
              <option value={"Ambedkar Nagar"}>
                Ambedkar Nagar (District)
              </option>
              <option value={"Barabanki"}>Barabanki (District)</option>
              <option value={"Sultanpur"}>Sultanpur (District)</option>
              <option value={"Amethi"}>Amethi (District)</option>

              <option value={"Banda"}>Banda (District)</option>
              <option value={"Chitrakoot"}>Chitrakoot (District)</option>
              <option value={"Hamirpur"}>Hamirpur (District)</option>
              <option value={"Mahoba"}>Mahoba (District)</option>

              <option value={"Deoria"}>Deoria (District)</option>
              <option value={"Gorakhpur"}>Gorakhpur (District)</option>
              <option value={"Kushinagar"}>Kushinagar (District)</option>
              <option value={"Maharajganj"}>Maharajganj (District)</option>

              <option value={"Auraiya"}>Auraiya (District)</option>
              <option value={"Etawah"}>Etawah (District)</option>
              <option value={"Farrukhabad"}>Farrukhabad (District)</option>
              <option value={"Kannauj"}>Kannauj (District)</option>
              <option value={"Kanpur Dehat"}>Kanpur Dehat (District)</option>
              <option value={"Kanpur Nagar"}>Kanpur Nagar (District)</option>

              <option value={"Jalaun"}>Jalaun (District)</option>
              <option value={"Jhansi"}>Jhansi (District)</option>
              <option value={"Lalitpur"}>Lalitpur (District)</option>

              <option value={"Hardoi"}>Hardoi (District)</option>
              <option value={"Lakhimpur Kheri"}>
                Lakhimpur Kheri (District)
              </option>
              <option value={"Lucknow"}>Lucknow (District)</option>
              <option value={"Raebareli"}>Raebareli (District)</option>
              <option value={"Sitapur"}>Sitapur (District)</option>
              <option value={"Unnao"}>Unnao (District)</option>

              <option value={"Mirzapur"}>Mirzapur (District)</option>
              <option value={"Sant Ravidas Nagar"}>
                Sant Ravidas Nagar (District)
              </option>
              <option value={"Sonbhadra"}>Sonbhadra (District)</option>

              <option value={"Baghpat"}>Baghpat (District)</option>
              <option value={"Bulandshahar"}>Bulandshahar (District)</option>
              <option value={"Gautam Buddh Nagar"}>
                Gautam Buddh Nagar (District)
              </option>
              <option value={"Ghaziabad"}>Ghaziabad (District)</option>
              <option value={"Meerut"}>Meerut (District)</option>
              <option value={"Hapur"}>Hapur (District)</option>

              <option value={"Bijnor"}>Bijnor (District)</option>
              <option value={"Amroha"}>Amroha (District)</option>
              <option value={"Moradabad"}>Moradabad (District)</option>
              <option value={"Rampur"}>Rampur (District)</option>
              <option value={"Sambhal"}>Sambhal (District)</option>

              <option value={"Chandauli"}>Chandauli (District)</option>
              <option value={"Ghazipur"}>Ghazipur (District)</option>
              <option value={"Jaunpur"}>Jaunpur (District)</option>
              <option value={"Varanasi"}>Varanasi (District)</option>

              <option value={"Muzaffarnagar"}>Muzaffarnagar (District)</option>
              <option value={"Saharanpur"}>Saharanpur (District)</option>
              <option value={"Shamli"}>Shamli (District)</option>
            </select>
          </div>
        ))}
      {partner === "STOCKIST" && district && (
        <div style={{ width: "500px" }}>
          <p style={{ padding: " 10px 0" }}>
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Terms and Conditions
            </strong>
            <br />
            <br />
            <strong> Expected Charges:</strong>
            <br />
            <br />
            Security Deposit (Refundable):
            <br />
            <strong>₹1.5 Lacs</strong>
            <sup> *</sup>{" "}
          </p>

          <p style={{ padding: " 10px 0" }}>
            Minimum Purchase Amount :
            <br />
            <strong>₹5.5 Lacs</strong>
            <sup> *</sup>
          </p>
        </div>
      )}
      {partner === "STOCKIST" && district && (
        <div style={{ width: "450px" }}>
          <p style={{ padding: " 10px 0" }}>
            Area Coverage:
            <br />
            <br />
            <p
              style={{
                width: "350px",
                padding: "0px",
                textTransform: "capitalize",
              }}
            >
              {locationStock.map((loc) => {
                return (
                  <>
                    <strong
                      style={{
                        overflowWrap: "wrap",
                      }}
                    >
                      {loc},{" "}
                    </strong>
                  </>
                )
              })}
            </p>
          </p>
        </div>
      )}
      {partner === "DISTRIBUTOR" && district && (
        <div style={{ width: "500px" }}>
          <p style={{ padding: " 10px 0" }}>
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Terms and Conditions
            </strong>
            <br />
            <br />
            <strong> Expected Charges:</strong>
            <br />
            <br />
            Security Deposit (Refundable):
            <br />
            <strong> ₹50 Thousand</strong>
            <sup> *</sup>{" "}
          </p>

          <p style={{ padding: " 10px 0" }}>
            Minimum Purchase Amount :
            <br />
            <strong>₹1.5 Lacs</strong>
            <sup> *</sup>
          </p>
        </div>
      )}
      {partner === "DISTRIBUTOR" && district && (
        <div style={{ width: "450px" }}>
          <p style={{ padding: " 10px 0" }}>
            Area Coverage:
            <br />
            <br />
            <p
              style={{
                width: "350px",
                padding: "0px",
                textTransform: "capitalize",
              }}
            >
              {location.map((loc) => {
                return (
                  <>
                    <strong
                      style={{
                        overflowWrap: "wrap",
                      }}
                    >
                      {loc},{" "}
                    </strong>
                  </>
                )
              })}
            </p>
          </p>
        </div>
      )}
      <div
        className="detailContact"
        style={{
          width: "500px",
          paddingTop: "7px",
          fontSize: "16px",
        }}
      >
        <br />
        <strong>Contact us:</strong>
        <br />
        E-Mail: sales@ramaera.in | Phone: +91-0120-4152818
      </div>
      <div
        className="detailContact"
        style={{ width: "450px", fontSize: "16px" }}
      >
        <br />
        <strong>संपर्क करें:</strong>
        <br />
        ई-मेल: sales@ramaera.in | फोन: +91-120-4152818
      </div>
      {partner && district && (
        <div style={{ width: "500px" }}>
          <p style={{ fontSize: "12px" }}>
            <sup>*</sup>All Data for the proposal purpose only,
            <br />
            It would be final as per demand and supply basis
          </p>
        </div>
      )}
    </FormWrapper>
  )
}
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
