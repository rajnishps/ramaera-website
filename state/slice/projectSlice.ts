import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  City: "",
  Country: "",
  State: "",
  dob: "",
  email: "",
  mobileNumber: "",
  name: "",
  occupation: "",
  directorData: "",
  yourProjectType: "",
  youAre: "",
  typeOfPartnership: "",
  fundingType: "",
  receivingMode: "",
  goal: "",
  targetFor: "",
  perPersonAmount: "",
  yourProjectTitle: "",
  brief: "",
  marketProblem: "",
  solution: "",
  yourProduct: "",
  businessModel: "",
  sizeOfMarket: "",
  currentTransaction: "",
  competitiveLandscape: "",
  financialProjection: "",
  fundNeed: "",
  equityStructure: "",
  exitOption: "",
  selectFundingType: "",
  fundingStage: "",
  selectFundingTypeAgain: "",
  fundingAmount: "",
  fundingDate: "",
  linkedinProfile: "",
  twitterProfile: "",
  facebookProfile: "",
  instagramProfile: "",
  websiteURL: "",
  thanksNote: "",
  directorOne: "",
  directorIntroOne: "",
  directorTwo: "",
  directorIntroTwo: "",
  directorThree: "",
  directorIntroThree: "",
}

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.City = action.payload
    },
    changeCountry: (state, action) => {
      state.Country = action.payload
    },
    changeState: (state, action) => {
      state.State = action.payload
    },
    changeDob: (state, action) => {
      state.dob = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changeMobileNumber: (state, action) => {
      state.mobileNumber = action.payload
    },
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeOccupation: (state, action) => {
      state.occupation = action.payload
    },
    changeDirectorData: (state, action) => {
      state.directorData = action.payload
    },

    changeyourProjectType: (state, action) => {
      state.yourProjectType = action.payload
    },
    changeyouAre: (state, action) => {
      state.youAre = action.payload
    },
    changetypeOfPartnership: (state, action) => {
      state.typeOfPartnership = action.payload
    },
    changefundingType: (state, action) => {
      state.fundingType = action.payload
    },
    changereceivingMode: (state, action) => {
      state.receivingMode = action.payload
    },
    changegoal: (state, action) => {
      state.goal = action.payload
    },
    changetargetFor: (state, action) => {
      state.targetFor = action.payload
    },
    changeperPersonAmount: (state, action) => {
      state.perPersonAmount = action.payload
    },
    changeyourProjectTitle: (state, action) => {
      state.yourProjectTitle = action.payload
    },
    changebrief: (state, action) => {
      state.brief = action.payload
    },
    changemarketProblem: (state, action) => {
      state.marketProblem = action.payload
    },
    changeSolution: (state, action) => {
      state.solution = action.payload
    },
    changeyourProduct: (state, action) => {
      state.yourProduct = action.payload
    },
    changebusinessModel: (state, action) => {
      state.businessModel = action.payload
    },
    changesizeOfMarket: (state, action) => {
      state.sizeOfMarket = action.payload
    },
    changecurrentTransaction: (state, action) => {
      state.currentTransaction = action.payload
    },
    changecompetitiveLandscape: (state, action) => {
      state.competitiveLandscape = action.payload
    },
    changefinancialProjection: (state, action) => {
      state.financialProjection = action.payload
    },
    changefundNeed: (state, action) => {
      state.fundNeed = action.payload
    },
    changeequityStructure: (state, action) => {
      state.equityStructure = action.payload
    },
    changeexitOption: (state, action) => {
      state.exitOption = action.payload
    },
    changeselectFundingType: (state, action) => {
      state.selectFundingType = action.payload
    },
    changefundingStage: (state, action) => {
      state.fundingStage = action.payload
    },
    changeselectFundingTypeAgain: (state, action) => {
      state.selectFundingTypeAgain = action.payload
    },
    changefundingAmount: (state, action) => {
      state.fundingAmount = action.payload
    },
    changefundingDate: (state, action) => {
      state.fundingDate = action.payload
    },
    changelinkedinProfile: (state, action) => {
      state.linkedinProfile = action.payload
    },
    changetwitterProfile: (state, action) => {
      state.twitterProfile = action.payload
    },
    changefacebookProfile: (state, action) => {
      state.facebookProfile = action.payload
    },
    changeinstagramProfile: (state, action) => {
      state.instagramProfile = action.payload
    },
    changewebsiteURL: (state, action) => {
      state.websiteURL = action.payload
    },
    changethanksNote: (state, action) => {
      state.thanksNote = action.payload
    },
    changedirectorOne: (state, action) => {
      state.directorOne = action.payload
    },
    changedirectorIntroOne: (state, action) => {
      state.directorIntroOne = action.payload
    },
    changedirectorTwo: (state, action) => {
      state.directorTwo = action.payload
    },
    changedirectorIntroTwo: (state, action) => {
      state.directorIntroTwo = action.payload
    },
    changedirectorThree: (state, action) => {
      state.directorThree = action.payload
    },
    changedirectorIntroThree: (state, action) => {
      state.directorIntroThree = action.payload
    },
  },
})

export const {
  changedirectorOne,
  changedirectorIntroOne,
  changedirectorTwo,
  changedirectorIntroTwo,
  changedirectorThree,
  changedirectorIntroThree,
  changeCity,
  changeCountry,
  changeState,
  changeDob,
  changeEmail,
  changeMobileNumber,
  changeName,
  changeOccupation,
  changeDirectorData,
  changeyourProjectType,
  changeyouAre,
  changetypeOfPartnership,
  changefundingType,
  changereceivingMode,
  changegoal,
  changetargetFor,
  changeperPersonAmount,
  changeyourProjectTitle,
  changebrief,
  changemarketProblem,
  changeSolution,
  changeyourProduct,
  changebusinessModel,
  changesizeOfMarket,
  changecurrentTransaction,
  changecompetitiveLandscape,
  changefinancialProjection,
  changefundNeed,
  changeequityStructure,
  changeexitOption,
  changeselectFundingType,
  changefundingStage,
  changeselectFundingTypeAgain,
  changefundingAmount,
  changefundingDate,
  changelinkedinProfile,
  changetwitterProfile,
  changefacebookProfile,
  changeinstagramProfile,
  changewebsiteURL,
  changethanksNote,
} = projectSlice.actions

export default projectSlice.reducer
