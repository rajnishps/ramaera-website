import { FormWrapper } from "./FormWrapper";

export function AddressForm({
  youAre,
  partnership,
  funding,
  contribution,
  goal,
  target,
  personAmount,
  projectTitle,
  brief,
  marketProblem,
  solution,
  yourProduct,
  businessModel,
  sizeMarket,
  currentTrasaction,
  competitiveLandscape,
  financialProjection,
  fundNeed,
  equityStructure,
  exitOption,
  projectType,
  fundraisingType,
  fundraisingStage,
  fundingType,
  fundingAmount,
  fundingDate,
}) {
  return (
    <>
      <FormWrapper title="Project Details">
        <label>Your Project Type</label>
        <select>
          <option disabled selected>
            Select Project Type
          </option>
          <option value={projectType}>Startup</option>
          <option value={projectType}>Existing</option>
        </select>

        <label>You Are ?</label>
        <select>
          <option disabled selected>
            Select
          </option>
          <option value={youAre}>Individual</option>
          <option value={youAre}>Company</option>
          <option value={youAre}>Registered NGO</option>
        </select>

        <label>Type Of Partnership !!</label>
        <select>
          <option disabled selected>
            Select Partnership
          </option>
          <option value={partnership}>Equity Base</option>
          <option value={partnership}>Debt/Loan</option>
        </select>

        <label>Funding Type</label>
        <input required type="text" value={funding} />

        <label>Contribution Receiving Mode</label>
        <select>
          <option disabled selected>
            Select Project Type
          </option>
          <option value={contribution}>INR</option>
        </select>

        <label>Goal (INR)</label>
        <input
          required
          type="number"
          value={goal}
          placeholder="Numerical value only"
        />

        <label>Target For</label>
        <input
          required
          type="number"
          value={target}
          placeholder="Number of Partners"
        />

        <label>Per Person Amount</label>
        <input required type="text" value={personAmount} />

        <label>Your Project Title</label>
        <input
          required
          type="text"
          value={projectTitle}
          placeholder="I am offering for Partnership"
        />

        <label>Brief about yourself & experience (minimum 30 character)*</label>
        <textarea
          required
          value={brief}
          rows={5}
          cols={60}
          placeholder="Brief about yourself..."
        />

        <label>Market Problem</label>
        <textarea
          required
          value={marketProblem}
          rows={5}
          cols={60}
          placeholder="Describe here..."
        />

        <label>Solution</label>
        <textarea
          required
          value={solution}
          rows={5}
          cols={60}
          placeholder="Brief Story about your Solution/Product.      (Minimum 100 character)*"
        />

        <label>Your Product</label>
        <textarea
          required
          value={yourProduct}
          rows={5}
          cols={60}
          placeholder="How your Product help to peoples"
        />

        <label>Business Model</label>
        <textarea
          required
          value={businessModel}
          rows={5}
          cols={60}
          placeholder="Discribe here ..."
        />

        <label>Size of Market</label>
        <textarea
          required
          value={sizeMarket}
          rows={5}
          cols={60}
          placeholder="Discribe here size of the market you are targeting"
        />

        <label>Current Trasaction</label>
        <textarea
          required
          value={currentTrasaction}
          rows={5}
          cols={60}
          placeholder="Please discribe the current traction if any achivement you have already accomplished"
        />

        <label>Competitive Landscape</label>
        <textarea
          required
          rows={5}
          cols={60}
          value={competitiveLandscape}
          placeholder="Discribe here your compatitors landscape"
        />

        <label>Financial Projection</label>
        <textarea
          required
          rows={5}
          cols={60}
          value={financialProjection}
          placeholder="Capex , Opex , Revenue"
        />

        <label>Fund Need & Use</label>
        <textarea
          required
          rows={5}
          cols={60}
          value={fundNeed}
          placeholder="Goal , and Use of fund"
        />

        <label>Equity Structure</label>
        <textarea
          required
          rows={5}
          cols={60}
          value={equityStructure}
          placeholder="Please discribe the Percentage (Funders %, Your %) after all expanses"
        />

        <label>Exit Option</label>
        <textarea
          required
          rows={5}
          cols={60}
          value={exitOption}
          placeholder="Discribe here ..."
        />

        <label>Select Fundraising Type</label>
        <select>
          <option disabled selected>
            Select Mode
          </option>
          <option value={fundraisingType}>Equity Base</option>
          <option value={fundraisingType}>Bank Loan</option>
        </select>

        <label>Select Fundraising Stage</label>
        <select>
          <option disabled selected>
            Select Stage
          </option>
          <option value={fundraisingStage}>Pre-Seed</option>
          <option value={fundraisingStage}>Seed</option>
        </select>

        <label>Select Funding Type</label>
        <select>
          <option disabled selected>
            Select Stage
          </option>
          <option value={fundingType}>Equity</option>
          <option value={fundingType}>Debt</option>
        </select>

        <label>Funding Amount</label>
        <input required type="text" value={fundingAmount} />

        <label>Funding Date</label>
        <input required type="date" value={fundingDate} />
      </FormWrapper>
    </>
  );
}
