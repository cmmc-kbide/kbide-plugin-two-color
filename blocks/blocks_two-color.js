Blockly.Blocks["ky_011_two_color_led_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-011 TWO COLOR LED");
      this.appendDummyInput()
        .appendField("RED PIN")
        .appendField(
          new Blockly.FieldTextInput("0"),
          "KY_011_TWO_COLOR_LED_RED_PIN"
        )
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_011_TWO_COLOR_LED_RED_VALUE"),
          "KY_011_TWO_COLOR_LED_RED_VALUE"
        );
      this.appendDummyInput()
        .appendField("GREEN PIN")
        .appendField(
          new Blockly.FieldTextInput("0"),
          "KY_011_TWO_COLOR_LED_GREEN_PIN"
        )
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_011_TWO_COLOR_LED_GREEN_VALUE"),
          "KY_011_TWO_COLOR_LED_GREEN_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };