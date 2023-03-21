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

      default:
        setLocationStock([])
    }
  }

  return (
    <FormWrapper title="BECOME A PART OF OUR DISTRIBUTION CHANNEL">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}>
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
        <label style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}>
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
              <option value={""}>..</option>
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
              <option value={""}>..</option>
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
            <p style={{ width: "350px", padding: "0px" }}>
              {locationStock.map((loc) => {
                return (
                  <>
                    <strong style={{ overflowWrap: "wrap" }}>{loc}, </strong>
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
            <p style={{ width: "350px", padding: "0px" }}>
              {location.map((loc) => {
                return (
                  <>
                    <strong style={{ overflowWrap: "wrap" }}>{loc}, </strong>
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
