module.exports = {
  'comma-dangle': {
    target: 'jscs',
    eval: function (value) {
      if (value === 2 || value[1] === 'never') {
        return { disallowTrailingComma: true }
      }

      return { requireTrailingComma: true }
    }
  },

  'no-cond-assign': {
    target: 'jshint',
    name: 'boss'
  },

  'no-console': {
    target: 'jscs',
    name: 'predef',
    truthy: function () {
      var list = this.value || []

      list.push('-console')

      return list
    }
  },

  'no-debugger': {
    target: 'jshint',
    name: 'debug'
  },

  'no-empty': {
    target: 'jscs',
    name: 'disallowEmptyBlocks'
  },

  'no-extra-parens': {
    target: 'jshint',
    name: 'singleGroups',
    truthy: false,
    falsy: true
  },

  'no-irregular-whitespace': {
    target: 'jshint',
    name: 'nonbsp'
  },

  'no-sparse-arrays': {
    target: 'jshint',
    name: 'elision'
  },

  'valid-jsdoc': {
    target: 'jscs',
    truthy: {
      'requireReturnTypes': true,
      'requireReturnDescription': true,
      'requireParamDescription': true
    }
  },

  'valid-typeof': {
    target: 'jshint',
    name: 'notypeof'
  },

  'block-scoped-var': {
    target: 'jshint',
    name: 'funcscope'
  },

  'complexity': {
    target: 'jshint',
    name: 'maxcomplexity',
    truthy: function (value) {
      return value[1]
    }
  },

  'curly': {
    target: 'jscs',
    eval: function (value) {
      if (value[1] === 'multi-line') {
        return { disallowCurlyBraces: true }
      }

      return { requireCurlyBraces: true }
    }
  },

  'dot-notation': {
    target: 'jscs',
    name: 'requireDotNotation',
    truthy: function (value) {
      if (value[1] && value[1].allowPattern === '^[a-z]+(_[a-z]+)+$') {
        var allExcept = ['snake_case']

        if (value[1].allowKeywords) {
          allExcept.push('keywords')
        }

        return { allExcept: allExcept }
      }

      return true
    }
  },

  'eqeqeq': {
    target: 'jshint',
    name: 'eqeqeq'
  },

  'guard-for-in': {
    target: 'jshint',
    name: 'forin'
  },

  'no-caller': {
    target: 'jshint',
    name: 'noarg'
  },

  'no-eq-null': {
    target: 'jshint',
    name: 'eqnull'
  },

  'no-eval': {
    target: 'jshint',
    name: 'evil'
  },

  'no-extend-native': {
    target: 'jshint',
    name: 'freeze'
  },

  'no-implicit-coercion': {
    target: 'jscs',
    name: 'disallowImplicitTypeConversion',
    truthy: function (value) {
      var list = []

      value = value[1]

      var counterpart = {
        'boolean': 'boolean',
        'string': 'string',
        'number': 'numeric'
      }

      for (var type in value) {
        if (type in counterpart) {
          list.push(counterpart[type])
        }
      }

      return list
    }
  },

  'no-invalid-this': {
    target: 'jshint',
    name: 'validthis'
  },

  'no-iterator': {
    target: 'jshint',
    name: 'iterator'
  },

  'no-loop-func': {
    target: 'jshint',
    name: 'loopfunc'
  },

  'no-multi-spaces': {
    target: 'jscs',
    name: 'disallowMultipleSpaces'
  },

  'no-multi-str': {
    target: 'jscs',
    name: 'disallowMultipleLineStrings'
  },

  'no-new-func': {
    target: 'jshint',
    name: 'supernew'
  },

  'no-new-wrappers': {
    target: 'jshint',
    name: 'supernew'
  },

  'no-new': {
    target: 'jshint',
    name: 'nonew'
  },

  'no-proto': {
    target: 'jshint',
    name: 'proto'
  },

  'no-script-url': {
    target: 'jshint',
    name: 'scripturl'
  },

  'no-sequences': {
    target: 'jshint',
    name: 'nocomma'
  },

  'no-unused-expressions': {
    target: 'jshint',
    name: 'expr'
  },

  'no-warning-comments': {
    target: 'jscs',
    name: 'disallowKeywordsInComments',
    truthy: function (value) {
      return (value[1] && value[1].terms) ? value[1].terms : []
    }
  },

  'no-with': {
    target: 'jscs',
    name: 'disallowKeywords',
    truthy: function () {
      var list = this.value || []

      list.push('with')

      return list
    }
  },

  'wrap-iife': {
    target: 'jscs',
    name: 'requireParenthesesAroundIIFE'
  },

  'yoda': {
    target: 'jscs',
    eval: function (value) {
      var verb = (value[1] === 'never') ? 'disallow' : 'require'

      var obj = {}

      obj[verb + 'YodaConditions'] = true

      return obj
    }
  },

  'strict': {
    target: 'jshint',
    eval: function (value) {
      if (value === 0) {
        return { globalstrict: true }
      }

      return { strict: true }
    }
  },

  'no-shadow': {
    target: 'jshint',
    eval: function (value) {
      var result = 'outer'

      if (value === 2) {
        result = false
      }

      if (value === 0) {
        result = true
      }

      return { shadow: result }
    }
  },

  'no-undef': {
    target: 'jshint',
    name: 'undef'
  },

  'no-unused-vars': {
    target: 'jshint',
    name: 'unused'
  },

  'no-use-before-define': {
    target: 'jshint',
    name: 'latedef'
  },

  'array-bracket-spacing': {
    target: 'jscs',
    eval: function (value) {
      var result = true
      var verb = 'require'
      var obj = {}

      if (value[1] === 'never') {
        verb = 'disallow'
      }

      if (value[2] && (value[2].objectsInArrays || value[2].arraysInArrays)) {
        result = {
          allExcept: value[2].objectsInArrays ? ['{', '}'] : []
        }

        result.allExcept =
          result.allExcept.concat(value[2].arraysInArrays ? ['[', ']'] : [])
      }

      obj[verb + 'SpacesInsideArrayBrackets'] = result
      obj[verb + 'SpacesInsideObjectBrackets'] = result

      return obj
    }
  },

  'brace-style': {
    target: 'jscs',
    eval: function (value) {
      var spacedKeywords = ['do', 'for', 'if', 'else', 'switch', 'case', 'try',
      'catch', 'finally', 'void', 'while', 'with', 'return', 'typeof',
      'function']

      if (value[0] > 0 && value[1] === 'stroustrup'
          && value[2] && value[2].allowSingleLine) {
        return { requireKeywordsOnNewLine: spacedKeywords }
      }

      return { disallowKeywordsOnNewLine: spacedKeywords }
    }
  },

  'camelcase': {
    target: 'jscs',
    name: 'requireCamelCaseOrUpperCaseIdentifiers',
    truthy: function (value) {
      if (value[1] && value[1].properties === 'never') {
        return 'ignoreProperties'
      }

      return true
    }
  },

  'comma-spacing': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] > 0 && value[1] && !value[1].before) {
        return { requireSpaceBeforeComma: true }
      }

      return { disallowSpaceBeforeComma: true }
    }
  },

  'comma-style': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] > 0 && value[1] === 'first') {
        return { disallowCommaBeforeLineBreak: true }
      }

      return { requireCommaBeforeLineBreak: true }
    }
  },

  'consistent-this': {
    target: 'jscs',
    name: 'safeContextKeyword',
    truthy: function (value) {
      return value[1]
    }
  },

  'eol-last': {
    target: 'jscs',
    name: 'requireLineFeedAtFileEnd'
  },

  'func-names': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      return {
        requireNamedUnassignedFunctions: true,
        disallowAnonymousFunctions: true
      }
    }
  },

  'func-style': {
    target: 'jscs',
    name: 'disallowFunctionDeclarations',
    truthy: true
  },

  'id-match': {
    target: 'jscs',
    name: 'disallowIdentifierNames',
    truthy: function (value) {
      return value[1].slice(2, -2).split('|')
    }
  },

  'indent': {
    target: 'jscs',
    name: 'validateIndentation',
    truthy: function (value) {
      if (value === 2) {
        return 4
      }

      return value[1] === 'tab' ? '\t' : value[1]
    }
  },

  'key-spacing': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      if (value[1].align === 'colon') {
        return {
          requireAlignedObjectValues: true,
          disallowSpaceAfterObjectKeys: {
            allExcept: ['aligned']
          }
        }
      }

      var obj = {}

      if (value[1].afterColon === true) {
        obj.requireSpaceBeforeObjectValues = true
      } else if (value[1].afterColon === false) {
        obj.disallowSpaceBeforeObjectValues = true
      }

      if (value[1].beforeColon === true) {
        obj.requireSpaceAfterObjectKeys = true
      } else if (value[1].beforeColon === false) {
        obj.disallowSpaceAfterObjectKeys = true
      }

      return obj
    }
  },

  'linebreak-style': {
    target: 'jscs',
    name: 'validateLineBreaks',
    truthy: function (value) {
      return value[1] === 'windows' ? 'CLRF' : 'LF'
    }
  },

  'lines-around-comment': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] > 0 || value > 0) {
        return {
          requirePaddingNewLinesBeforeLineComments: true,
          requireSpaceAfterLineComment: true
        }
      }

      return {}
    }
  },

  'new-cap': {
    target: 'jscs',
    name: 'requireCapitalizedConstructors',
    truthy: function (value) {
      if (value[1]) {
        var a = value[1].newIsCapExceptions || []
        var b = value[1].capIsNewExceptions || []

        return { allExcept: a.concat(b) }
      }

      return true
    }
  },

  'newline-after-var': {
    target: 'jscs',
    eval: function (value) {
      if (value > 0 || (value[0] > 0 && value[1] === 'always')) {
        return {
          requireLineBreakAfterVariableAssignment: true,
          requirePaddingNewLineAfterVariableDeclaration: true
        }
      }

      return {}
    }
  },

  'no-mixed-spaces-and-tabs': {
    target: 'jscs',
    name: 'disallowMixedSpacesAndTabs'
  },

  'no-multiple-empty-lines': {
    target: 'jscs',
    name: 'disallowMultipleLineBreaks'
  },

  'no-spaced-func': {
    target: 'jscs',
    name: 'disallowSpacesInCallExpression'
  },

  'no-trailing-spaces': {
    target: 'jscs',
    name: 'disallowTrailingWhitespace',
    truthy: function (value) {
      if (value[1] && value[1].skipBlankLines) {
        return 'ignoreEmptyLines'
      }

      return true
    }
  },

  'no-underscore-dangle': {
    target: 'jscs',
    name: 'disallowDanglingUnderscores'
  },

  'one-var': {
    target: 'jscs',
    eval: function (value) {
      if (value[1] && value[1] === 'never') {
        return {
          disallowMultipleVarDecl: true,
          requireMultipleVarDecl: true
        }
      }

      if (value[0] > 0 || value > 0) {
        return { disallowMultipleVarDecl: true }
      }

      return {}
    }
  },

  'operator-linebreak': {
    target: 'jscs',
    eval: function (value) {
      if (value[1] && value[1] === 'before') {
        return { disallowOperatorBeforeLineBreak: true }
      } else if (value[1] && value[1] === 'after') {
        return { requireOperatorBeforeLineBreak: true }
      }

      return {}
    }
  },

  'padded-blocks': {
    target: 'jscs',
    eval: function (value) {
      if (value[1] && value[1] === 'never') {
        return { disallowPaddingNewlinesInBlocks: true }
      } else if (value[1] && value[1] === 'always') {
        return { requirePaddingNewlinesInBlocks: true }
      }

      return {}
    }
  },

  'quote-props': {
    target: 'jscs',
    eval: function (value) {
      if (value[2]) {
        return { disallowQuotedKeysInObjects: 'allButReserved' }
      }

      if (value[1] === 'as-needed') {
        return { disallowQuotedKeysInObjects: true }
      }

      if (value[0] > 0 || value > 0) {
        return { requireQuotedKeysInObjects: true }
      }

      return {}
    }
  },

  'quotes': {
    target: 'jscs',
    eval: function (value) {
      if (value[1] === 'backtick') {
        return { requireTemplateStrings: true }
      }

      var mark = value[1] === 'double' ? '"' : '\''

      if (value[2] === 'avoid-escape') {
        return {
          validateQuoteMarks: {
            mark: mark,
            escape: true
          }
        }
      }

      if (value[0] === 0 || value === 0) {
        return {}
      }

      return { validateQuoteMarks: mark }
    }
  },

  'semi-spacing': {
    target: 'jscs',
    name: 'disallowSpaceBeforeSemicolon',
    truthy: true
  },

  'semi': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      if (value[1] === 'always') {
        return { requireSemicolons: true }
      }

      return { disallowSemicolons: true }
    }
  },

  'space-after-keywords': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      var keywords = ['do', 'for', 'if', 'else', 'switch', 'try', 'catch',
        'finally', 'void', 'while', 'with', 'typeof', 'function']

      var list = (this.value || []).concat(keywords)

      if (value[1] === 'always') {
        return { requireSpaceAfterKeywords: list }
      }

      return { disallowSpaceAfterKeywords: list }
    }
  },

  'space-before-blocks': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      if (value[1] === 'always') {
        return { requireSpaceBeforeBlockStatements: true }
      }

      return { disallowSpaceBeforeBlockStatements: true }
    }
  },

  'space-before-function-paren': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      if (value[1] === 'always') {
        return {
          requireSpacesInFunctionDeclaration: true,
          requireSpacesInFunctionExpression: true
        }
      }

      return {
        disallowSpacesInFunctionDeclaration: true,
        disallowSpacesInFunctionExpression: true,
        disallowSpacesInFunction: true,
        disallowSpacesInNamedFunctionExpression: true
      }
    }
  },

  'space-in-parens': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      var obj = {}

      var list = null

      if (value[2]) {
        list = value[2].exceptions.join('').split('')
      }

      if (value[1] === 'never') {
        obj.disallowSpacesInsideParentheses = true

        if (list) {
          obj.disallowSpacesInsideParentheses = {
            only: list
          }
        }
      } else {
        obj.requireSpacesInsideParentheses = 'all'

        if (list) {
          obj.requireSpacesInsideParentheses = {
            all: true,
            except: list
          }
        }
      }

      return obj
    }
  },

  'space-infix-ops': {
    target: 'jscs',
    name: 'requireSpaceAfterBinaryOperators',
    truthy: true
  },

  'space-return-throw-case': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return {}
      }

      var list = (this.value || []).concat(['return', 'throw', 'case'])

      if (value[1] === 'always') {
        return { requireSpaceAfterKeywords: list }
      }

      return { disallowSpaceAfterKeywords: list }
    }
  },

  'space-unary-ops': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return { disallowSpaceAfterPrefixUnaryOperators: true }
      }

      return { requireSpaceAfterPrefixUnaryOperators: true }
    }
  },

  'arrow-parens': {
    target: 'jscs',
    eval: function (value) {
      if (value[0] === 0 || value === 0) {
        return { disallowParenthesesAroundArrowParam: true }
      }

      return { requireParenthesesAroundArrowParam: true }
    }
  },

  'no-var': {
    target: 'jshint',
    name: 'varstmt'
  },

  'prefer-spread': {
    target: 'jscs',
    name: 'requireSpread'
  },

  'require-yield': {
    target: 'jshint',
    name: 'noyield'
  },

  'max-depth': {
    target: 'jshint',
    name: 'maxdepth',
    truthy: function (value) {
      return value[1]
    }
  },

  'max-len': {
    target: 'jscs',
    name: 'maximumLineLength',
    truthy: function (value) {
      return value[1]
    }
  },

  'max-params': {
    target: 'jshint',
    name: 'maxparams',
    truthy: function (value) {
      return value[1]
    }
  },

  'max-statements': {
    target: 'jshint',
    name: 'maxstatements',
    truthy: function (value) {
      return value[1]
    }
  },

  'no-bitwise': {
    target: 'jshint',
    name: 'bitwise'
  },

  'no-plusplus': {
    target: 'jshint',
    name: 'plusplus'
  }
}
