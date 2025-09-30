'use strict';

goog.provide('Blockly.Blocks.comments');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['comments_comment'] = {
  /**
   * @this Blockly.Block
   */
  init: function(){
    this.jsonInit({
      "message0": Blockly.Msg.COMMENTBLOCK, 
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.comments,
      "extensions": ["colours_comments", "shape_statement"]
    });
  }
};