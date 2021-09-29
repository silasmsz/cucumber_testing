import { Given } from "@wdio/cucumber-framework"
import goToURL from "../../support/actions/goToURL"

Given("A web browser is at the Google home page", () => {
  goToURL("/");
});