(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-pose'), require('hey-listen')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-pose', 'hey-listen'], factory) :
    (factory((global.splitText = {}),global.React,null,null));
}(this, (function (exports,React,posed,heyListen) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    posed = posed && posed.hasOwnProperty('default') ? posed['default'] : posed;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var splitStyles = { display: 'inline-block' };
    var parseText = function (text) {
        heyListen.invariant(typeof text === 'string', 'Child of SplitText must be a string');
        return {
            text: text,
            numChars: text.length,
            splitText: text.split(' ').map(function (word) { return word.split(''); })
        };
    };
    var getPoseProps = function (props) {
        var wordPoses = props.wordPoses, charPoses = props.charPoses, children = props.children, poseProps = __rest(props, ["wordPoses", "charPoses", "children"]);
        return poseProps;
    };
    var SplitText = (function (_super) {
        __extends(SplitText, _super);
        function SplitText(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {};
            var wordPoses = props.wordPoses, charPoses = props.charPoses, children = props.children;
            parseText(children);
            if (wordPoses)
                _this.Word = posed.div(wordPoses);
            if (charPoses)
                _this.Char = posed.div(charPoses);
            return _this;
        }
        SplitText.getDerivedStateFromProps = function (_a, state) {
            var children = _a.children;
            return !state || children !== state.text ? parseText(children) : null;
        };
        SplitText.prototype.renderChars = function (word, wordIndex, numWords, baseCharCount) {
            var _this = this;
            var numChars = this.state.numChars;
            var numCharsInWord = word.length;
            var text = this.state.text;
            return word.map(function (char, i) {
                return _this.Char ? (React__default.createElement(_this.Char, __assign({ key: text + i, style: splitStyles, wordIndex: wordIndex, numWords: numWords, charIndex: baseCharCount + i, charInWordIndex: i, numChars: numChars, numCharsInWord: numCharsInWord }, getPoseProps(_this.props)), char)) : (char);
            });
        };
        SplitText.prototype.renderWords = function () {
            var _this = this;
            var _a = this.state, text = _a.text, splitText = _a.splitText;
            var numWords = splitText.length;
            var charCount = 0;
            return splitText.map(function (word, i) {
                var chars = _this.renderChars(word, i, numWords, charCount).concat([
                    i !== numWords - 1 ? '\u00A0' : null
                ]);
                charCount += word.length;
                return _this.Word ? (React__default.createElement(_this.Word, __assign({ key: text + i, style: splitStyles, wordIndex: i, numWords: numWords }, getPoseProps(_this.props)), chars)) : (React__default.createElement("div", { style: splitStyles, key: text + i }, chars));
            });
        };
        SplitText.prototype.render = function () {
            return this.renderWords();
        };
        return SplitText;
    }(React.PureComponent));

    exports.default = SplitText;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
