Blockly.Blocks['ky_011_two_color_led_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-011 TWO COLOR LED");
    this.appendValueInput("KY_011_TWO_COLOR_LED_RED_PIN")
        .setCheck("Number")
        .appendField("RED PIN");
    this.appendValueInput("KY_011_TWO_COLOR_LED_GREEN_PIN")
        .setCheck("Number")
        .appendField("GREEN PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};