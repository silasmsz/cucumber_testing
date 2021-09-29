import { Then } from "@wdio/cucumber-framework"
import verifyLinksContain from "../../support/assertions/verifyLinksContain"

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
  verifyLinksContain($$(".LC20lb"),keyword);
});