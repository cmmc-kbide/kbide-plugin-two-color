Blockly.JavaScript["ky_011_two_color_led_block"] = function(block) {
    var text_ky_011_two_color_led_red_pin = block.getFieldValue(
      "KY_011_TWO_COLOR_LED_RED_PIN"
    );
    var variable_ky_011_two_color_led_red_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_011_TWO_COLOR_LED_RED_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_ky_011_two_color_led_green_pin = block.getFieldValue(
      "KY_011_TWO_COLOR_LED_GREEN_PIN"
    );
    var variable_ky_011_two_color_led_green_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_011_TWO_COLOR_LED_GREEN_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
  int KY_011_TWO_COLOR_LED_RED_PIN = ${text_ky_011_two_color_led_red_pin}; // pin for red signal
  int KY_011_TWO_COLOR_LED_GREEN_PIN = ${variable_ky_011_two_color_led_green_value}; // pin for green signal
  #END

  #SETUP
    pinMode(KY_011_TWO_COLOR_LED_RED_PIN, OUTPUT);
    pinMode(KY_011_TWO_COLOR_LED_GREEN_PIN, OUTPUT);
  #END

  ${variable_ky_011_two_color_led_red_value} = KY_011_TWO_COLOR_LED_RED_PIN;
  ${variable_ky_011_two_color_led_green_value} = KY_011_TWO_COLOR_LED_GREEN_PIN;

    `;
    return code;
  };