import { ErrorPayload } from "@formspree/react/dist/types/src/types";

export interface FormSpreeState {
  submitting: boolean;
  succeeded: boolean;
  errors: ErrorPayload[];
}
