import audio from "./audio.yaml";
import characters from "./characters.yaml";
import common from "./common.yaml";
import screens from "./screens.yaml";
import { ModuleConfigInput } from "narrat";

const gameConfigs: ModuleConfigInput = {
  audio,
  characters,
  common,
  screens,
};
export default gameConfigs;
