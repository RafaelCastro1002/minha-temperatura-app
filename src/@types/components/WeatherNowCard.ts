import ClimateConditionsModel from "../../models/ClimateConditionsModel";
import { LocationType } from "../location";

namespace WeatherNowCardTypes {
  export type Props = {
    location: Partial<LocationType>;
    climateConditions: ClimateConditionsModel | null;
  };
}

export default WeatherNowCardTypes;
