import { useState, useEffect } from "react"
import { FormWrapper } from "./FormWrapper"
import { useDispatch } from "react-redux"
import {
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
} from "../../../state/slice/projectSlice"

export function AddressForm() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [perPersonAmount, setPerPersonAmount] = useState(0)
  const [totalPeople, setTotalPeople] = useState(1)
  const [goalAmount, setGoalAmount] = useState(0)

  const changeTotalPeople = (val) => {
    setTotalPeople(val)
  }
  const changeGoalAmount = (val) => {
    setGoalAmount(val)
  }
  const changeAmount = () => {
    setPerPersonAmount(goalAmount / totalPeople)
  }
  useEffect(() => {
    changeAmount()
  }, [totalPeople, totalPeople])
  return (
    <>
      <FormWrapper number={1} title="Project Details">
        <div style={{ width: "500px" }}>
          <label>Your Project Type</label>
          <br />
          <select
            //required
            onChange={(e) => dispatch(changeyourProjectType(e.target.value))}
          >
            <option value={undefined} disabled selected>
              Select Project Type
            </option>
            <option>Startup</option>
            <option>Existing</option>
          </select>
        </div>
        <div style={{ width: "450px" }}>
          <label>You Are ?</label>
          <br />
          <select
            //required
            onChange={(e) => dispatch(changeyouAre(e.target.value))}
          >
            <option value={""} disabled selected>
              Select
              <br />
            </option>
            <option>Individual</option>
            <option>Company</option>
            <option>Registered NGO</option>
          </select>
        </div>
        <div style={{ width: "500px" }}>
          <label>Type Of Partnership !!</label>
          <br />
          <select
            //required
            onChange={(e) => dispatch(changetypeOfPartnership(e.target.value))}
          >
            <option disabled selected>
              Select Partnership
              <br />
            </option>
            <option>Equity Base</option>
            <option>Debt/Loan</option>
          </select>
        </div>
        <div style={{ width: "450px" }}>
          <label>Funding Type</label>
          <br />
          <input
            //required
            onChange={(e) => dispatch(changefundingType(e.target.value))}
            type="text"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Contribution Receiving Mode</label>
          <select
            //required
            onChange={(e) => dispatch(changereceivingMode(e.target.value))}
          >
            <br />
            <option value={""} disabled selected>
              Select Project Type
            </option>
            <option>INR</option>
          </select>
        </div>
        <div style={{ width: "450px" }}>
          <label>Goal (INR)</label>
          <br />

          <input
            //required
            onChange={(e) => {
              changeGoalAmount(e.target.value)
              dispatch(changegoal(e.target.value))
            }}
            type="number"
            placeholder="Numerical value only"
          />
        </div>
        {/* <div style={{ width: "500px" }}>
          <label>Target For</label>
          <br />
          <input
            //required 
            onChange={(e) => {
              changeTotalPeople(e.target.value)
              dispatch(changetargetFor(e.target.value))
            }}
            type="number"
            placeholder="Number of Partners"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Per Person Amount</label>
          <br />
          <input
            //required 
            disable
            value={perPersonAmount}
            onChange={() => dispatch(changeperPersonAmount(perPersonAmount))}
            type="text"
          />
        </div> */}
        <div style={{ width: "500px" }}>
          <label>Your Project Title</label>
          <br />
          <input
            //required
            type="text"
            onChange={(e) => dispatch(changeyourProjectTitle(e.target.value))}
            placeholder="I am offering for Partnership"
          />
        </div>
        <div style={{ width: "450px" }}></div>
        <div style={{ width: "500px" }}>
          <label>Brief about yourself & experience</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changebrief(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Brief about yourself (minimum 30 character)*"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Market Problem</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changemarketProblem(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Describe here..."
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Solution</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changeSolution(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Brief Story about your Solution/Product.      (Minimum 100 character)*"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Your Product</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changeyourProduct(e.target.value))}
            rows={5}
            cols={60}
            placeholder="How your Product help to peoples"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Business Model</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changebusinessModel(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Describe here ..."
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Size of Market</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changesizeOfMarket(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Describe here size of the market you are targeting"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Current Trasaction</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changecurrentTransaction(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Please describe the current traction if any achivement you have already accomplished"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Competitive Landscape</label>
          <br />
          <textarea
            //required
            onChange={(e) =>
              dispatch(changecompetitiveLandscape(e.target.value))
            }
            rows={5}
            cols={60}
            placeholder="Describe here your compatitors landscape"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Financial Projection</label>
          <br />
          <textarea
            //required
            onChange={(e) =>
              dispatch(changefinancialProjection(e.target.value))
            }
            rows={5}
            cols={60}
            placeholder="Capex , Opex , Revenue"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Fund Need & Use</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changefundNeed(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Goal , and Use of fund"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Equity Structure</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changeequityStructure(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Please describe the Percentage (Funders %, Your %) after all expanses"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Exit Option</label>
          <br />
          <textarea
            //required
            onChange={(e) => dispatch(changeexitOption(e.target.value))}
            rows={5}
            cols={60}
            placeholder="Describe here ..."
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Select Fundraising Type</label>
          <br />
          <select
            //required
            onChange={(e) => dispatch(changeselectFundingType(e.target.value))}
          >
            <option value={""} disabled selected>
              Select Mode
            </option>
            <option>Equity Base</option>
            <option>Bank Loan</option>
          </select>
        </div>
        <div style={{ width: "450px" }}></div>

        <div
          style={{
            display: "flex",
            width: "500px",
            flexDirection: "column",
          }}
        >
          <h5 style={{ padding: "10px 0" }}>
            Previous Raised History if any = Select "YES"
          </h5>
          <div
            style={{
              display: "flex",
              width: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                //required
                type="radio"
                value="yes"
                name="gender"
                onClick={() => setShow(true)}
              />
              <label>Yes</label>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                //required
                type="radio"
                value="no"
                name="gender"
                onClick={() => setShow(false)}
              />{" "}
              <label>No</label>
            </div>
          </div>
        </div>

        <div style={{ width: "450px" }}></div>

        {show && (
          <div style={{ width: "500px" }}>
            <label>Select Fundraising Stage</label>
            <br />
            <select
              onChange={(e) => dispatch(changefundingStage(e.target.value))}
            >
              <br />
              <option value={""} disabled selected>
                Select Stage
              </option>
              <option>Pre-Seed</option>
              <option>Seed</option>
            </select>
          </div>
        )}
        {show && (
          <div style={{ width: "450px" }}>
            <label>Select Funding Type</label>
            <select
              onChange={(e) =>
                dispatch(changeselectFundingTypeAgain(e.target.value))
              }
            >
              <option value={""} disabled selected>
                Select Stage
                <br />
              </option>
              <option>Equity</option>
              <option>Debt</option>
            </select>
          </div>
        )}
        {show && (
          <div style={{ width: "500px" }}>
            <label>Funding Amount</label>
            <br />
            <input
              onChange={(e) => dispatch(changefundingAmount(e.target.value))}
              type="text"
            />
          </div>
        )}
        {show && (
          <div style={{ width: "450px" }}>
            <label>Funding Date</label>
            <br />
            <input
              onChange={(e) => dispatch(changefundingDate(e.target.value))}
              type="date"
            />
          </div>
        )}
      </FormWrapper>
    </>
  )
}
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
