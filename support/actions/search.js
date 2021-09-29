/**
 * Search foa a keyword
 * 
 * @param {String} keyword keyword to search for 
 * @param {object} inputField WebdriverIO input field 
 * @param {object} submitButton WebdriverIO submit button
 */

export default (keyword, inputField, submitButton) => {
inputField.waitforDisplayed(5000);
inputField.click();
inputField.setValue(keyword);
submitButton.waitforDisplayed(5000);
submitButton.click();
};
