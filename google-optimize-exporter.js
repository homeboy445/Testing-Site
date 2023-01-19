const response = {
  default: {
    experiment: [
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          experimentId: 30,
        },
        data: {
          name: "A/B test - 1",
          template: 1,
          intent: 1,
          gTrackingId: "SDVQ8JF5LL",
          experimentKey: "OPT-N7WR3V4_OPT-597KC",
          gaConfig: {
            propertyStreamKey: {
              propertyKey: {
                propertyId: "349546483",
              },
              webStreamKey: {
                entityId: "4427779852",
                uid: "g87ImragT7OhDOWvbClY0A",
              },
            },
            goldObjective: {
              systemObjective: {
                systemObjectiveType: 1,
              },
            },
            secondaryObjective: [],
            secondaryGoldObjective: [
              {
                customObjective: {
                  eventName: "purchase",
                  desiredOutcome: 2,
                  desiredDirection: 2,
                },
              },
              {
                systemObjective: {
                  systemObjectiveType: 3,
                },
              },
            ],
            options: {
              equalWeighting: true,
              trafficCoverage: 0.595,
              minimumExperimentLengthInDays: 14,
              trafficWeightType: 2,
            },
          },
          experimentRule: {
            trigger: [
              {
                filter: [],
              },
            ],
          },
          sectionMetadata: [
            {
              variation: [
                {
                  name: "Variant 1",
                  trafficWeight: 1.5,
                },
                {
                  name: "Variant 2",
                  trafficWeight: 0.25,
                },
                {
                  name: "Variant 3",
                  trafficWeight: 0.5,
                },
                {
                  name: "Variant 4",
                  trafficWeight: 1.5,
                },
                {
                  name: "Variant 5 - testing1",
                  trafficWeight: 1,
                },
              ],
              original: {
                trafficWeight: 1.25,
              },
            },
          ],
          treatmentContext: [
            {
              modelPageUrl:
                "https://homeboy445.github.io/Testing-Site/lorem.html",
              contextRule: {
                trigger: [
                  {
                    filter: [
                      {
                        type: 10,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/lorem.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                      },
                      {
                        type: 10,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/lorem1.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/lorem.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 4,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "homeboy445",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 2,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "https://homeboy445",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 3,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "lorem.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[\\w]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[\\d]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        regexPredicate: {
                          ignoreCase: {
                            type: 8,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            boolean: true,
                            templateToken: [],
                            escaping: [],
                          },
                        },
                        anyOf: false,
                      },
                      {
                        type: 1,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "ok",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 4,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "testing.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 2,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "http://",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 3,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "com",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[^\\w]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[^\\d]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        regexPredicate: {
                          ignoreCase: {
                            type: 8,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            boolean: true,
                            templateToken: [],
                            escaping: [],
                          },
                        },
                        anyOf: false,
                      },
                      {
                        type: 4,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "GA Audience Lists",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 2,
                            listItem: [
                              {
                                type: 1,
                                string: "4427868010",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              {
                                type: 1,
                                string: "4427868011",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                            ],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: true,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "_UTM Campaign",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "112",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Device Category",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "desktop",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: false,
                      },
                      {
                        type: 7,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Client ID Age",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "86400",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: false,
                        anyOf: false,
                      },
                      {
                        type: 5,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Client ID Age",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "300",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: false,
                        anyOf: false,
                      },
                      {
                        type: 4,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Referrer",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "testing.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "City ID",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 2,
                            listItem: [
                              {
                                type: 1,
                                string: "9075215",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              {
                                type: 1,
                                string: "9299549",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                            ],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: true,
                      },
                      {
                        type: 1,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Region ID",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "21163",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Metro ID",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "200504",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Country ID",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 2,
                            listItem: [
                              {
                                type: 1,
                                string: "2826",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              {
                                type: 1,
                                string: "2356",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                            ],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: true,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Browser",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 2,
                            listItem: [
                              {
                                type: 1,
                                string: "Chrome",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              {
                                type: 1,
                                string: "Edge",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              {
                                type: 1,
                                string: "Safari",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                            ],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: true,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Operating System",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 2,
                            listItem: [
                              {
                                type: 1,
                                string: "Macintosh",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              {
                                type: 1,
                                string: "Android",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                            ],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: true,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Mobile Device Info",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "something",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "queryParam_accId",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "true",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "dataLayer1",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "1",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "testing-1",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: '"just testing"',
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "use_cookie_1",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "test",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "runJStoCheckFromArray",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "true",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "_event",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "optimize.domChange",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              section: [
                {
                  variation: [
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 57,
                            setupTag: [],
                            teardownTag: [],
                            elementText: {
                              selector: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              text: {
                                type: 1,
                                string: "EDITED-TEXT!!!",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              childIndex: {
                                type: 6,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                integer: "0",
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 53,
                            setupTag: [],
                            teardownTag: [],
                            elementStyle: {
                              selector: {
                                type: 1,
                                string: "button.w3-margin-top",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "button.w3-margin-top",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              property: {
                                type: 1,
                                string: "display",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              value: {
                                type: 1,
                                string: "none",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              cssRule: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: true,
                                templateToken: [],
                                escaping: [],
                              },
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003ch1 class\u003d"w3-margin w3-jumbo" style\u003d"background: purple"\u003eSTART PAGE\u003c/h1\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "div.w3-bar",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "div.w3-bar",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cdiv class\u003d"w3-bar w3-red w3-card w3-left-align w3-large"\u003eJUST-TESTING-STUFF-IS-ALL\u003c/div\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 3,
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string:
                                  "body\u003ediv:nth-of-type(2)\u003ediv\u003ediv:nth-of-type(1)\u003eh1",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string:
                                  "body\u003ediv:nth-of-type(2)\u003ediv\u003ediv:nth-of-type(1)\u003eh1",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  "\u003ch1\u003eHELLO THERE!\u003c/h1\u003e",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 2,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 58,
                            setupTag: [],
                            teardownTag: [],
                            elementScript: {
                              selector: {
                                type: 1,
                                string: "body\u003eheader",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "body\u003eheader",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              script: {
                                type: 1,
                                string:
                                  "return (function(){\n  return \"this is a string\".split(' ').join('');\n});",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              requiresContent: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 58,
                            setupTag: [],
                            teardownTag: [],
                            elementScript: {
                              selector: {
                                type: 1,
                                string: "i.fa-anchor",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "i.fa-anchor",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              script: {
                                type: 1,
                                string: 'return "just another test"',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              requiresContent: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: true,
                                templateToken: [],
                                escaping: [],
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
          gaExperimentTrackingId: "A_zoSNMzRniZoi3Uuln9DA",
          section: [],
        },
        statMetadata: {
          createdTime: "1673885169872",
          modifiedTime: "1673886293241",
          entityVersion: "1673886293241",
        },
        experimentMetadata: {
          startedAt: "1673886301959",
          startedBy: "akshit.kushwaha@wingify.com",
          diagnosticsResult: {
            installationDiagnostics: [
              {
                diagnosedTime: "1673885225745",
                url: "https://homeboy445.github.io/Testing-Site/lorem.html",
                gTrackingId: "SDVQ8JF5LL",
                detectedIssue: [101, 207, 307],
                triggerMethod: 0,
                installMethod: 0,
                hasAsyncHide: false,
              },
            ],
          },
          publishedChange: [],
          unpublishedChangeType: [],
        },
        token:
          "ADmvj8wvOPcGctImdYldStyLWFgwi3j_RDs74fwyjrhiNJoYBwDZwuN_c4_VKqMX7bEtt077P2g5U1PbCedwn09lhzsStMaOqJAS6j4SE9TtC2R2xBFNAwA",
        info: {
          experimentKey: "OPT-N7WR3V4_OPT-597KC",
          gaExperimentKey: {
            accountId: "0",
            propertyId: "349546483",
            streamEntityId: "4427779852",
            experimentId: "A_zoSNMzRniZoi3Uuln9DA",
          },
          status: 3,
          downstreamPropertiesWithDataInheritance: [],
          schedule: {
            startTimeMs: "1673886301959",
            endTimeMs: "1676910301959",
          },
          pausePeriods: [],
          intent: 1,
        },
        mutation: [],
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          experimentId: 34,
        },
        data: {
          name: "MVT - 1",
          template: 2,
          intent: 1,
          gTrackingId: "SDVQ8JF5LL",
          experimentKey: "OPT-N7WR3V4_OPT-WTX7N",
          gaConfig: {
            propertyStreamKey: {
              propertyKey: {
                propertyId: "349546483",
              },
              webStreamKey: {
                entityId: "4427779852",
                uid: "g87ImragT7OhDOWvbClY0A",
              },
            },
            goldObjective: {
              customObjective: {
                eventName: "justAnotherEventname",
                desiredOutcome: 2,
                desiredDirection: 2,
              },
            },
            secondaryObjective: [],
            secondaryGoldObjective: [
              {
                systemObjective: {
                  systemObjectiveType: 2,
                },
              },
            ],
            options: {
              equalWeighting: true,
              trafficCoverage: 1,
              minimumExperimentLengthInDays: 14,
            },
          },
          experimentRule: {
            trigger: [
              {
                filter: [],
              },
            ],
          },
          sectionMetadata: [
            {
              name: "Section A",
              variation: [
                {
                  name: "Variant 1",
                  trafficWeight: 1,
                },
              ],
              original: {
                trafficWeight: 1,
              },
            },
            {
              name: "Section B",
              variation: [
                {
                  name: "Variant 1",
                  trafficWeight: 1,
                },
                {
                  name: "Variant 2",
                  trafficWeight: 1,
                },
              ],
              original: {
                trafficWeight: 1,
              },
            },
          ],
          treatmentContext: [
            {
              modelPageUrl:
                "https://homeboy445.github.io/Testing-Site/lorem.html",
              contextRule: {
                trigger: [
                  {
                    filter: [
                      {
                        type: 10,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/lorem.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                      },
                      {
                        type: 4,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page Hostname",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "homeboy.github.io",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 2,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page Path",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "test/test1",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page Fragment",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "justAnotherDay",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 10,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/justAnotherDay.html#justAnother",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Device Category",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "desktop",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: false,
                      },
                      {
                        type: 3,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "index.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Browser",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 2,
                            listItem: [
                              {
                                type: 1,
                                string: "Chrome",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              {
                                type: 1,
                                string: "Firefox",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                            ],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        serverSide: true,
                        anyOf: true,
                      },
                      {
                        type: 2,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "testing-1",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "testing-js-var",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "queryParam_accId",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "122341",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "_event",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "justActivateIt",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              section: [
                {
                  variation: [
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003ch1 class\u003d"w3-margin w3-jumbo" style\u003d"backgroun: grey;"\u003eSTART PAGE\u003c/h1\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  variation: [
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "body\u003ediv:nth-of-type(2)",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "body\u003ediv:nth-of-type(2)",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cdiv class\u003d"w3-row-padding w3-padding-64 w3-container" style\u003d"background: cyan;"\u003e\n      \u003cdiv class\u003d"w3-content"\u003e\n        \u003cdiv class\u003d"w3-twothird"\u003e\n          \u003ch1\u003eLorem Ipsum\u003c/h1\u003e\n          \u003ch5 class\u003d"w3-padding-32"\u003e\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat.\n          \u003c/h5\u003e\n\n          \u003cp class\u003d"w3-text-grey"\u003e\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat\n            non proident, sunt in culpa qui officia deserunt mollit anim id est\n            laborum consectetur adipiscing elit, sed do eiusmod tempor\n            incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat.\n          \u003c/p\u003e\n        \u003c/div\u003e\n\n        \u003cdiv class\u003d"w3-third w3-center"\u003e\n          \u003ci class\u003d"fa fa-anchor w3-padding-64 w3-text-red"\u003e\u003c/i\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n    \u003c/div\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                  ],
                },
              ],
            },
          ],
          gaExperimentTrackingId: "BSfG6P7FT7OK54lGv6keMg",
          section: [],
        },
        statMetadata: {
          createdTime: "1673935852729",
          modifiedTime: "1674027056556",
          entityVersion: "1674027056556",
        },
        experimentMetadata: {
          startedAt: "1674027079972",
          startedBy: "akshit.kushwaha@wingify.com",
          diagnosticsResult: {
            installationDiagnostics: [
              {
                diagnosedTime: "1673965086769",
                url: "https://homeboy445.github.io/Testing-Site/lorem.html",
                gTrackingId: "SDVQ8JF5LL",
                detectedIssue: [101, 207, 307],
                triggerMethod: 0,
                installMethod: 0,
                hasAsyncHide: false,
              },
            ],
          },
          publishedChange: [],
          unpublishedChangeType: [],
        },
        token:
          "ADmvj8zD_6-fct2Ujhde78PBVrvszt3h3pxoGuZU2hHawOR3kMzyyd5Uee8a8mxdu6PW46aJOT00itgLVwXXBJX4pmF0QBhBjfPM-0SIvJoi1HWy8_vc-co",
        info: {
          experimentKey: "OPT-N7WR3V4_OPT-WTX7N",
          gaExperimentKey: {
            accountId: "0",
            propertyId: "349546483",
            streamEntityId: "4427779852",
            experimentId: "BSfG6P7FT7OK54lGv6keMg",
          },
          status: 3,
          downstreamPropertiesWithDataInheritance: [],
          schedule: {
            startTimeMs: "1674027079972",
            endTimeMs: "1677051079972",
          },
          pausePeriods: [],
          intent: 1,
        },
        mutation: [],
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          experimentId: 38,
        },
        data: {
          name: "A/B test - 1 (1)",
          template: 1,
          intent: 1,
          gTrackingId: "SDVQ8JF5LL",
          experimentKey: "OPT-N7WR3V4_OPT-T4KQS",
          gaConfig: {
            propertyStreamKey: {
              propertyKey: {
                propertyId: "349546483",
              },
              webStreamKey: {
                entityId: "4427779852",
                uid: "g87ImragT7OhDOWvbClY0A",
              },
            },
            goldObjective: {
              systemObjective: {
                systemObjectiveType: 1,
              },
            },
            secondaryObjective: [],
            secondaryGoldObjective: [
              {
                customObjective: {
                  eventName: "purchase",
                  desiredOutcome: 2,
                  desiredDirection: 2,
                },
              },
              {
                systemObjective: {
                  systemObjectiveType: 3,
                },
              },
            ],
            options: {
              equalWeighting: true,
              trafficCoverage: 0.595,
              minimumExperimentLengthInDays: 14,
              trafficWeightType: 2,
            },
          },
          experimentRule: {
            trigger: [
              {
                filter: [
                  {
                    type: 4,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "GA Audience Lists",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 2,
                        listItem: [
                          {
                            type: 1,
                            string: "4427868010",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "4427868011",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: true,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "_UTM Campaign",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "112",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Device Category",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "desktop",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: false,
                  },
                  {
                    type: 7,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Client ID Age",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "86400",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: false,
                    anyOf: false,
                  },
                  {
                    type: 5,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Client ID Age",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "300",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: false,
                    anyOf: false,
                  },
                  {
                    type: 4,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Referrer",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "testing.html",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "City ID",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 2,
                        listItem: [
                          {
                            type: 1,
                            string: "9075215",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "9299549",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: true,
                  },
                  {
                    type: 1,
                    negate: true,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Region ID",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "21163",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Metro ID",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "200504",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Country ID",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 2,
                        listItem: [
                          {
                            type: 1,
                            string: "2826",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "2356",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: true,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Browser",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 2,
                        listItem: [
                          {
                            type: 1,
                            string: "Chrome",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "Edge",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "Safari",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: true,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Operating System",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 2,
                        listItem: [
                          {
                            type: 1,
                            string: "Macintosh",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "Android",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: true,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "Mobile Device Info",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "something",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    serverSide: true,
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "queryParam_accId",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "true",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "dataLayer1",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "1",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    anyOf: false,
                  },
                  {
                    type: 5,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "testing-1",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "1111",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "use_cookie_1",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "test",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "runJStoCheckFromArray",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "true",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                    anyOf: false,
                  },
                  {
                    type: 1,
                    arg: [
                      {
                        type: 4,
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        macroReference: "_event",
                        templateToken: [],
                        escaping: [],
                      },
                      {
                        type: 1,
                        string: "optimize.activate",
                        listItem: [],
                        mapKey: [],
                        mapValue: [],
                        templateToken: [],
                        escaping: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          sectionMetadata: [
            {
              variation: [
                {
                  name: "Variant 1",
                  trafficWeight: 1.5,
                },
                {
                  name: "Variant 2",
                  trafficWeight: 0.25,
                },
                {
                  name: "Variant 3",
                  trafficWeight: 0.5,
                },
                {
                  name: "Variant 4",
                  trafficWeight: 1.5,
                },
                {
                  name: "Variant 5 - testing1",
                  trafficWeight: 1,
                },
              ],
              original: {
                trafficWeight: 1.25,
              },
            },
          ],
          treatmentContext: [
            {
              name: "Page 1",
              modelPageUrl:
                "https://homeboy445.github.io/Testing-Site/lorem.html",
              contextRule: {
                trigger: [
                  {
                    filter: [
                      {
                        type: 10,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/lorem.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                      },
                      {
                        type: 10,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/lorem1.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/lorem.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 4,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "homeboy445",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 2,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "https://homeboy445",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 3,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "lorem.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[\\w]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[\\d]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        regexPredicate: {
                          ignoreCase: {
                            type: 8,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            boolean: true,
                            templateToken: [],
                            escaping: [],
                          },
                        },
                        anyOf: false,
                      },
                      {
                        type: 1,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "ok",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 4,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "testing.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 2,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "http://",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 3,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "com",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[^\\w]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 0,
                        negate: true,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "/[^\\d]/g",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        regexPredicate: {
                          ignoreCase: {
                            type: 8,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            boolean: true,
                            templateToken: [],
                            escaping: [],
                          },
                        },
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page Hostname",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "homeboy.github.io",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                      {
                        type: 1,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page Path",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "testing/path/1",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                    ],
                  },
                ],
              },
              section: [
                {
                  variation: [
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 57,
                            setupTag: [],
                            teardownTag: [],
                            elementText: {
                              selector: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              text: {
                                type: 1,
                                string: "EDITED-TEXT!!!",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              childIndex: {
                                type: 6,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                integer: "0",
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 53,
                            setupTag: [],
                            teardownTag: [],
                            elementStyle: {
                              selector: {
                                type: 1,
                                string: "button.w3-margin-top",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "button.w3-margin-top",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              property: {
                                type: 1,
                                string: "display",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              value: {
                                type: 1,
                                string: "none",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              cssRule: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: true,
                                templateToken: [],
                                escaping: [],
                              },
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "h1.w3-jumbo",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003ch1 class\u003d"w3-margin w3-jumbo" style\u003d"background: purple"\u003eSTART PAGE\u003c/h1\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "div.w3-bar",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "div.w3-bar",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cdiv class\u003d"w3-bar w3-red w3-card w3-left-align w3-large"\u003eJUST-TESTING-STUFF-IS-ALL\u003c/div\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 3,
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string:
                                  "body\u003ediv:nth-of-type(2)\u003ediv\u003ediv:nth-of-type(1)\u003eh1",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string:
                                  "body\u003ediv:nth-of-type(2)\u003ediv\u003ediv:nth-of-type(1)\u003eh1",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  "\u003ch1\u003eHELLO THERE!\u003c/h1\u003e",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 2,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 58,
                            setupTag: [],
                            teardownTag: [],
                            elementScript: {
                              selector: {
                                type: 1,
                                string: "body\u003eheader",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "body\u003eheader",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              script: {
                                type: 1,
                                string:
                                  "return (function(){\n  return \"this is a string\".split(' ').join('');\n});",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              requiresContent: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 58,
                            setupTag: [],
                            teardownTag: [],
                            elementScript: {
                              selector: {
                                type: 1,
                                string: "i.fa-anchor",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "i.fa-anchor",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              script: {
                                type: 1,
                                string: 'return "just another test"',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              requiresContent: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: true,
                                templateToken: [],
                                escaping: [],
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "Page 2",
              modelPageUrl:
                "https://homeboy445.github.io/Testing-Site/testing.html",
              contextRule: {
                trigger: [
                  {
                    filter: [
                      {
                        type: 10,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/testing.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                      },
                      {
                        type: 4,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string: "homeboy445",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                        anyOf: false,
                      },
                    ],
                  },
                ],
              },
              section: [
                {
                  variation: [
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 57,
                            setupTag: [],
                            teardownTag: [],
                            elementText: {
                              selector: {
                                type: 1,
                                string: "h1.w3-jumbo\u003eb",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "h1.w3-jumbo\u003eb",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              text: {
                                type: 1,
                                string: "TESTING-again\u0026again!",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              childIndex: {
                                type: 6,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                integer: "0",
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "#mySidebar",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "#mySidebar",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cnav class\u003d"w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style\u003d"z-index: 3; width: 300px; font-weight: bold; transition: none 0s ease 0s !important; top: 96px !important; height: 866px;" id\u003d"mySidebar"\u003e\n      \u003cbr\u003e\n      \u003ca href\u003d"javascript:void(0)" onclick\u003d"w3_close()" class\u003d"w3-button w3-hide-large w3-display-topleft" style\u003d"width: 100%; font-size: 22px"\u003eClose Menu\u003c/a\u003e\n      \u003cdiv class\u003d"w3-container"\u003e\n        \u003ch3 class\u003d"w3-padding-64"\u003e\n          \u003cb\u003eCompany\u003cbr\u003eName\u003c/b\u003e\n        \u003c/h3\u003e\n      \u003c/div\u003e\n      \u003cdiv class\u003d"w3-bar-block"\u003e\n        \u003ca href\u003d"#" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eHome\u003c/a\u003e\n        \u003ca href\u003d"#showcase" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eShowcase\u003c/a\u003e\n        \u003ca href\u003d"#services" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eServices\u003c/a\u003e\n        \u003ca href\u003d"#designers" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eDesigners\u003c/a\u003e\n        \u003ca href\u003d"#packages" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003ePackages\u003c/a\u003e\n        \u003ca href\u003d"#contact" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eContact\u003c/a\u003e\n      \u003c/div\u003e\n    \u003c/nav\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 4,
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "body\u003enav:nth-of-type(1)",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "body\u003enav:nth-of-type(1)",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cnav class\u003d"w3-sidebar w3-collapse w3-top w3-large w3-padding" style\u003d"z-index: 3; width: 300px; font-weight: bold; transition: none 0s ease 0s !important; top: 96px !important; height: 866px; background: purple;" id\u003d"mySidebar"\u003e\n      \u003cbr\u003e\n      \u003ca href\u003d"javascript:void(0)" onclick\u003d"w3_close()" class\u003d"w3-button w3-hide-large w3-display-topleft" style\u003d"width: 100%; font-size: 22px"\u003eClose Menu\u003c/a\u003e\n      \u003cdiv class\u003d"w3-container"\u003e\n        \u003ch3 class\u003d"w3-padding-64"\u003e\n          \u003cb\u003eCompany\u003cbr\u003eName\u003c/b\u003e\n        \u003c/h3\u003e\n      \u003c/div\u003e\n      \u003cdiv class\u003d"w3-bar-block"\u003e\n        \u003ca href\u003d"#" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eHome\u003c/a\u003e\n        \u003ca href\u003d"#showcase" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eShowcase\u003c/a\u003e\n        \u003ca href\u003d"#services" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eServices\u003c/a\u003e\n        \u003ca href\u003d"#designers" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eDesigners\u003c/a\u003e\n        \u003ca href\u003d"#packages" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003ePackages\u003c/a\u003e\n        \u003ca href\u003d"#contact" onclick\u003d"w3_close()" class\u003d"w3-bar-item w3-button w3-hover-white"\u003eContact\u003c/a\u003e\n      \u003c/div\u003e\n    \u003c/nav\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "#packages",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "#packages",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cdiv class\u003d"w3-container" id\u003d"packages" style\u003d"margin-top: 75px;"\u003e\n        \u003ch1 class\u003d"w3-xxxlarge w3-text-red"\u003e\u003cb\u003ePackages.\u003c/b\u003e\u003c/h1\u003e\n        \u003chr style\u003d"width: 50px; border: 5px solid red" class\u003d"w3-round"\u003e\n        \u003cp\u003e\n          Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n          aliquip ex ea commodo consequat. Duis aute irure\n        \u003c/p\u003e\n      \u003c/div\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 2,
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string: "#contact",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string: "#contact",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cdiv class\u003d"w3-container" id\u003d"contact" style\u003d"margin-top: 75px; background: green;"\u003e\n        \u003ch1 class\u003d"w3-xxxlarge w3-text-red"\u003e\u003cb\u003eContact.\u003c/b\u003e\u003c/h1\u003e\n        \u003chr style\u003d"width: 50px; border: 5px solid red" class\u003d"w3-round"\u003e\n        \u003cp\u003e\n          Do you want us to style your home? Fill out the form and fill me in\n          with the details :) We love meeting new people!\n        \u003c/p\u003e\n        \u003cform action\u003d"/index.html" target\u003d""\u003e\n          \u003cdiv class\u003d"w3-section"\u003e\n            \u003clabel\u003eName\u003c/label\u003e\n            \u003cinput class\u003d"w3-input w3-border" type\u003d"text" name\u003d"Name"\u003e\n          \u003c/div\u003e\n          \u003cdiv class\u003d"w3-section"\u003e\n            \u003clabel\u003eEmail\u003c/label\u003e\n            \u003cinput class\u003d"w3-input w3-border" type\u003d"text" name\u003d"Email"\u003e\n          \u003c/div\u003e\n          \u003cdiv class\u003d"w3-section"\u003e\n            \u003clabel\u003eMessage\u003c/label\u003e\n            \u003cinput class\u003d"w3-input w3-border" type\u003d"text" name\u003d"Message"\u003e\n          \u003c/div\u003e\n          \u003cbutton type\u003d"submit" class\u003d"w3-button w3-block w3-padding-large w3-red w3-margin-bottom"\u003e\n            Send Message\n          \u003c/button\u003e\n        \u003c/form\u003e\n      \u003c/div\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 0,
                            },
                          },
                          {
                            positiveConditionId: [],
                            negativeConditionId: [],
                            positiveTriggerId: [],
                            negativeTriggerId: [],
                            type: 54,
                            setupTag: [],
                            teardownTag: [],
                            elementContent: {
                              selector: {
                                type: 1,
                                string:
                                  "div.w3-main\u003ediv:nth-of-type(8)\u003ediv:nth-of-type(2)\u003eul\u003eli:nth-of-type(7)",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              identifier: {
                                type: 1,
                                string:
                                  "div.w3-main\u003ediv:nth-of-type(8)\u003ediv:nth-of-type(2)\u003eul\u003eli:nth-of-type(7)",
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              continueUndo: {
                                type: 8,
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                boolean: false,
                                templateToken: [],
                                escaping: [],
                              },
                              html: {
                                type: 1,
                                string:
                                  '\u003cli class\u003d"w3-padding-16"\u003e\n              \u003ch2\u003e$ 249\u003c/h2\u003e\n              \u003cspan class\u003d"w3-opacity"\u003eJUST-TESTING!!!!\u003c/span\u003e\n            \u003c/li\u003e',
                                listItem: [],
                                mapKey: [],
                                mapValue: [],
                                templateToken: [],
                                escaping: [],
                              },
                              mode: 4,
                            },
                          },
                        ],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                  ],
                },
              ],
              experienceTreatment: {
                treatmentType: 1,
                domTreatment: {
                  tag: [],
                },
              },
            },
            {
              name: "Page 3",
              modelPageUrl:
                "https://homeboy445.github.io/Testing-Site/index.html",
              contextRule: {
                trigger: [
                  {
                    filter: [
                      {
                        type: 10,
                        arg: [
                          {
                            type: 4,
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            macroReference: "Page URL",
                            templateToken: [],
                            escaping: [],
                          },
                          {
                            type: 1,
                            string:
                              "https://homeboy445.github.io/Testing-Site/index.html",
                            listItem: [],
                            mapKey: [],
                            mapValue: [],
                            templateToken: [],
                            escaping: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              section: [
                {
                  variation: [
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                    {
                      treatmentType: 1,
                      domTreatment: {
                        tag: [],
                      },
                    },
                  ],
                },
              ],
              experienceTreatment: {
                treatmentType: 1,
                domTreatment: {
                  tag: [],
                },
              },
            },
          ],
          gaExperimentTrackingId: "U_wTwjAOS0KDzolSps45xw",
          archived: false,
          origin: {
            type: 4,
            experimentOrigin: {
              experimentKey: {
                accountId: "4705444981",
                containerId: "15792778",
                experimentId: 32,
              },
            },
          },
          section: [],
        },
        statMetadata: {
          createdTime: "1674028914769",
          modifiedTime: "1674029250896",
          entityVersion: "1674029250896",
        },
        experimentMetadata: {
          startedAt: "1674029280493",
          startedBy: "akshit.kushwaha@wingify.com",
          diagnosticsResult: {
            installationDiagnostics: [],
          },
          publishedChange: [],
          unpublishedChangeType: [],
        },
        token:
          "ADmvj8yj9ozNmOFMSiJg6Y5JoM70EStERNBKtC2yEPMgK91ceNEIQiRkulxdkq1pDUiFbP-0hwYRyudb-cz4Q-IHuIyUmcHkMrm_Y4eN3dma2F6NKOPbMcA",
        info: {
          experimentKey: "OPT-N7WR3V4_OPT-T4KQS",
          gaExperimentKey: {
            accountId: "0",
            propertyId: "349546483",
            streamEntityId: "4427779852",
            experimentId: "U_wTwjAOS0KDzolSps45xw",
          },
          status: 3,
          downstreamPropertiesWithDataInheritance: [],
          schedule: {
            startTimeMs: "1674029280493",
            endTimeMs: "1677053280493",
          },
          pausePeriods: [],
          intent: 1,
        },
        mutation: [],
      },
    ],
  },
};

const variablesResponse = {
  default: {
    variable: [
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 1,
        },
        data: {
          name: "testing-1",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "j",
              versionId: "1",
            },
            param: [
              {
                key: "name",
                value: {
                  type: 1,
                  string: "testing",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673855249776",
          modifiedTime: "1673855249776",
          entityVersion: "1673855249776",
        },
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 2,
        },
        data: {
          name: "awesome",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "u",
              versionId: "1",
            },
            param: [
              {
                key: "queryKey",
                value: {
                  type: 1,
                  string: "testing",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
              {
                key: "component",
                value: {
                  type: 1,
                  string: "QUERY",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673856762835",
          modifiedTime: "1673856778014",
          entityVersion: "1673856778014",
        },
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 3,
        },
        data: {
          name: "name",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "k",
              versionId: "1",
            },
            param: [
              {
                key: "decodeCookie",
                value: {
                  type: 8,
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  boolean: true,
                  templateToken: [],
                  escaping: [],
                },
              },
              {
                key: "name",
                value: {
                  type: 1,
                  string: "testing_cookie",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673858139497",
          modifiedTime: "1673858139497",
          entityVersion: "1673858139497",
        },
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 4,
        },
        data: {
          name: "run",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "jsm",
              versionId: "1",
            },
            param: [
              {
                key: "javascript",
                value: {
                  type: 1,
                  string: "function() {\nreturn true;\n}",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673858887033",
          modifiedTime: "1673858887033",
          entityVersion: "1673858887033",
        },
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 5,
        },
        data: {
          name: "use_cookie_1",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "k",
              versionId: "1",
            },
            param: [
              {
                key: "decodeCookie",
                value: {
                  type: 8,
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  boolean: true,
                  templateToken: [],
                  escaping: [],
                },
              },
              {
                key: "name",
                value: {
                  type: 1,
                  string: "testing",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673867356360",
          modifiedTime: "1673867356360",
          entityVersion: "1673867356360",
        },
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 6,
        },
        data: {
          name: "queryParam_accId",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "u",
              versionId: "1",
            },
            param: [
              {
                key: "queryKey",
                value: {
                  type: 1,
                  string: "accountId",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
              {
                key: "component",
                value: {
                  type: 1,
                  string: "QUERY",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673877638613",
          modifiedTime: "1673877638613",
          entityVersion: "1673877638613",
        },
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 7,
        },
        data: {
          name: "dataLayer1",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "v",
              versionId: "1",
            },
            param: [
              {
                key: "dataLayerVersion",
                value: {
                  type: 6,
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  integer: "2",
                  templateToken: [],
                  escaping: [],
                },
              },
              {
                key: "setDefaultValue",
                value: {
                  type: 8,
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  boolean: false,
                  templateToken: [],
                  escaping: [],
                },
              },
              {
                key: "name",
                value: {
                  type: 1,
                  string: "dataLayerTest",
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673877705338",
          modifiedTime: "1673877705338",
          entityVersion: "1673877705338",
        },
      },
      {
        key: {
          accountId: "4705444981",
          containerId: "15792778",
          macroId: 8,
        },
        data: {
          name: "runJStoCheckFromArray",
          type: 41,
          positiveConditionId: [],
          negativeConditionId: [],
          positiveTriggerId: [],
          negativeTriggerId: [],
          vendorTemplate: {
            key: {
              publicId: "jsm",
              versionId: "1",
            },
            param: [
              {
                key: "javascript",
                value: {
                  type: 1,
                  string: 'function() {\nreturn ["ok"].includes("ok");\n}',
                  listItem: [],
                  mapKey: [],
                  mapValue: [],
                  templateToken: [],
                  escaping: [],
                },
              },
            ],
            valueCache: [],
          },
        },
        statMetadata: {
          createdTime: "1673877774286",
          modifiedTime: "1673877774286",
          entityVersion: "1673877774286",
        },
      },
    ],
  },
};

const builtInValueTypes = {
  default: {
    key: {
      accountId: "4705444981",
      containerId: "15792778",
      experimentId: 30,
    },
    value: [
      {
        builtInMacroType: 42,
        id: "9075215",
        displayName: "Delhi",
        description: "Delhi,Delhi,India",
      },
      {
        builtInMacroType: 42,
        id: "9299549",
        displayName: "Gobindpur",
        description: "Gobindpur,Jharkhand,India",
      },
      {
        builtInMacroType: 43,
        id: "21163",
        displayName: "New Hampshire",
        description: "New Hampshire,United States",
      },
      {
        builtInMacroType: 44,
        id: "200504",
        displayName: "Philadelphia PA",
        description: "Philadelphia, PA,United States",
      },
      {
        builtInMacroType: 45,
        id: "2826",
        displayName: "United Kingdom",
        description: "United Kingdom",
      },
      {
        builtInMacroType: 45,
        id: "2356",
        displayName: "India",
        description: "India",
      },
      {
        builtInMacroType: 47,
        id: "4427868010",
        displayName: "All Users",
        description: "All users",
      },
      {
        builtInMacroType: 47,
        id: "4427868011",
        displayName: "Purchasers",
        description: "Users who have made a purchase",
      },
    ],
  },
};

class ValueMap {
  constructor(builtInValTypes) {
    this.valueMap = {};
    builtInValTypes.default.value.forEach((valueObj) => {
      this.valueMap[valueObj.id] = {
        displayName: valueObj.displayName,
        description: valueObj.description,
      };
    });
  }
  getValueMap(id) {
    const valueData = this.valueMap[id];
    if (!valueData) return id;
    return valueData.displayName;
  }
}

class VariableExtractor extends ValueMap {
  constructor(response, valueResponse) {
    super(valueResponse);
    this.variableMap = {};
    this.extractVariablesInfoFromResponse(response);
  }
  extractVariablesInfoFromResponse(variablesResponse) {
    variablesResponse.default.variable.forEach((variableStore) => {
      const gglOptLocalName = variableStore.data.name;
      const type = variableStore.data.vendorTemplate.key.publicId;
      let originalName = "",
        runnableJsCode = "",
        dataLayerVersion = "",
        setDefaultValueDataLayer = false;
      variableStore.data.vendorTemplate.param.forEach((paramObj) => {
        if (paramObj.key === "name" || paramObj.key === "queryKey") {
          originalName = paramObj.value.string;
        }
        if (paramObj.key === "javascript") {
          runnableJsCode = paramObj.value.string;
        }
        if (paramObj.key === "dataLayerVersion") {
          dataLayerVersion = paramObj.value.integer;
        }
        if (paramObj.key === "setDefaultValue") {
          setDefaultValueDataLayer = paramObj.value.boolean;
        }
      });
      this.variableMap[gglOptLocalName] = {
        type,
        originalName,
      };
      if (runnableJsCode) {
        this.variableMap[gglOptLocalName].runnableJsCode = runnableJsCode;
      }
      if (dataLayerVersion) {
        this.variableMap[gglOptLocalName].dataLayerInfo = {
          version: dataLayerVersion,
          setDefaultValue: setDefaultValueDataLayer,
        };
      }
    });
  }
  getVariable(variableName) {
    const variableData = this.variableMap[variableName];
    if (!variableData) return variableName;
    switch (variableData.type) {
      case "j":
        return `js.${variableData.originalName}`;
      case "u":
        return `queryParam.${variableData.originalName}`;
      case "k":
        return `cookie.${variableData.originalName}`;
      case "jsm":
        return `run_js.${variableName}`; // currently we don't return the runnableCode;
      case "v":
        return `dataLayer.${variableData.originalName}`;
      default:
        return variableData.originalName;
    }
  }
  getJSCodeViaVariable(variableName) {
    return this.variableMap[variableName] || "";
  }
}

class InfoExtractor extends VariableExtractor {
  constructor(response, variablesResponse, valueResponse) {
    super(variablesResponse, valueResponse);
    this.exportedData = response;
    this.mappedData = { experiments: [] };
  }
  getCampaignType(campaign) {
    const variationInfo = campaign.pages[0].variationInfo;
    switch (
      true // this might be erroneous;
    ) {
      case variationInfo.length > 1: {
        // signifies more sections;
        return "multivariate";
      }
      case variationInfo[0].variation[0].redirectTreatment: {
        return "split";
      }
      default: {
        return "ab"; // update for personalize and banner as well;
      }
    }
  }
  extractCampaignData(campaign, data) {
    const getObjective = (objv) => {
      if (!objv) return null;
      if (objv.customObjective) {
        return { type: "custom", name: objv.customObjective.eventName };
      } else {
        switch (objv.systemObjective.systemObjectiveType) {
          case 1:
            return { name: "Purchases" };
          case 2:
            return { name: "Purchase Revenue" };
          case 3:
            return { name: "Page View" };
        }
      }
    };
    campaign.name = data.name;
    campaign.goals = [];
    let primaryObjective = getObjective(data.gaConfig.goldObjective);
    if (primaryObjective) {
      campaign.goals.push({ ...primaryObjective, isPrimary: true });
      campaign.goals = [
        ...campaign.goals,
        ...(data.gaConfig.secondaryGoldObjective || []).map((obj) => {
          return getObjective(obj);
        }),
      ];
    }
    campaign.trafficPercentage =
      (data.gaConfig?.options?.trafficCoverage ?? 1) * 100;
  }
  extractVariationInfo(treatmentContextObj, variationInfo) {
    const getVariationChangesInfo = (variationObject) => {
      if (variationObject.redirectTreatment) {
        // the campaign is split;
        return variationObject.redirectTreatment;
      } else {
        return variationObject.domTreatment.tag.map((obj) => {
          // `elementStyle` was there when we deleted any element from the campaign page, `elementContent` is there when we apply any css changes and 'elementScript' is there when we run any js code for any particular element & `elementText` is used when we edit any text in editor;
          const eleObject =
            obj.elementStyle ||
            obj.elementContent ||
            obj.elementScript ||
            obj.elementText;
          return {
            script_code: eleObject?.script?.string, // in case js should be run for an element;
            css_selector: eleObject?.selector?.string,
            identifier: eleObject?.identifier?.string,
            html_changes: eleObject?.html?.string, // in case some css changes should be applied;
            remove_element:
              eleObject?.property?.string === "display" &&
              eleObject?.value?.string === "none", // in case the selected element should be deleted;
            text: eleObject?.text?.string,
          };
        });
      }
    };
    let campaign = {};
    campaign.variationInfo = JSON.parse(JSON.stringify(variationInfo)); // change this;
    if (treatmentContextObj.section.length > 0) {
      treatmentContextObj.section.forEach((variationObj, sectionIndex) => {
        const numberOfVariations =
          campaign.variationInfo[sectionIndex].variation.length + 1; // +1 for original;
        variationObj.variation.forEach((variationObject, variationIndex) => {
          if (variationObject.redirectTreatment) {
            // the campaign is split;
            campaign.variationInfo[sectionIndex].variation[
              variationIndex
            ].redirectTreatment = getVariationChangesInfo(variationObject);
          } else {
            campaign.variationInfo[sectionIndex].variation[
              variationIndex
            ].editorChanges = getVariationChangesInfo(variationObject);
          }
          const trafficWeight =
            campaign.variationInfo[sectionIndex].variation[variationIndex]
              .trafficWeight;
          campaign.variationInfo[sectionIndex].variation[
            variationIndex
          ].trafficWeight = Math.round(
            (trafficWeight / numberOfVariations) * 100
          );
        });
        campaign.variationInfo[sectionIndex].original.trafficWeight =
          Math.round(
            (campaign.variationInfo[sectionIndex].original.trafficWeight /
              numberOfVariations) *
              100
          );
      });
    } else {
      campaign.experienceChanges = getVariationChangesInfo(
        treatmentContextObj.experienceTreatment
      );
    }
    return campaign;
  }
  extractCampaignUrlAndSegmentationInfo(triggers) {
    const getFiltersFromFilterObject = (filterObject) => {
      const isNegation = filterObject.negate;
      const isRegexPredicateAvailable = filterObject.regexPredicate;
      const leftOpr = filterObject.arg[0].macroReference;
      const rightOpr =
        filterObject.arg[1].string ??
        filterObject.arg[1].listItem.map((item) =>
          this.getValueMap(item.string)
        );
      return {
        lOpr: this.getVariable(leftOpr),
        operatorCode: filterObject.type,
        rOpr: this.getValueMap(rightOpr),
        isNegation,
        isRegexPredicateAvailable,
      };
    };
    /** Google optimize's operator codes:
     *  - Type 10: matches (negate is true in case of doesn’t match)
        - Type 2: starts with (I think)
        - Type 3: ends with
        - Type 0: regex matching, for ignore case - regexPredicate.ignoreCase.boolean = true.
        - Type 4: doesn’t contain
        - Type 1: equals
        - Type 7: Greater than
        - Type 8: Greater than equal to
        - Type 5: less than
        - Type 6: less than equal to
     */
    let campaign = {};
    campaign.urlFilters = [];
    campaign.segmentationFilters = [];
    triggers[0].filter.forEach((filterObject) => {
      const filterArr = getFiltersFromFilterObject(filterObject);
      if (filterArr.lOpr.includes("Page ")) {
        switch (filterArr.lOpr) {
          case "Page Hostname": {
            const allowedOperators = [4, 0];
            if (!allowedOperators.includes(filterArr.operatorCode)) {
              filterArr.operatorCode = 4; // contains;
            }
            break;
          }
          case "Page Path": {
            const allowedOperators = [4, 0, 3];
            if (!allowedOperators.includes(filterArr.operatorCode)) {
              filterArr.operatorCode = 3; // ends with;
            }
            break;
          }
          case "Page Fragment": {
            filterArr.operatorCode = 3; // ends with;
            break;
          }
        }
        campaign.urlFilters.push(filterArr);
      } else {
        campaign.segmentationFilters.push(filterArr);
      }
    });
    return campaign;
  }
  extractInfoFromExportFile() {
    const experimentObject = this.exportedData["experiment"];
    experimentObject.forEach((experiment) => {
      const campaign = { segmentationFilters: [] };
      this.extractCampaignData(campaign, experiment.data);
      // treatmentContext object basically consists of data for different pages;
      experiment.data.treatmentContext.forEach((treatmentContextObject) => {
        campaign.pages = campaign.pages || [];
        const campaignPageObj = {
          name: treatmentContextObject.name,
          editor_url: treatmentContextObject.modelPageUrl,
        };
        Object.assign(
          campaignPageObj,
          this.extractCampaignUrlAndSegmentationInfo(
            treatmentContextObject.contextRule.trigger
          )
        );
        campaign.segmentationFilters = [
          ...campaign.segmentationFilters,
          ...campaignPageObj.segmentationFilters,
        ];
        delete campaignPageObj.segmentationFilters;
        Object.assign(
          campaignPageObj,
          this.extractVariationInfo(
            treatmentContextObject,
            experiment.data.sectionMetadata
          )
        );
        campaign.pages.push(campaignPageObj);
      });
      if (campaign.pages.length > 1) {
        // `experimentRule` key is there in case where there is more than one page for a campaign, in which case the `treatmentContextObject.contextRule.triggers` would be empty;
        campaign.segmentationFilters = [
          ...campaign.segmentationFilters,
          ...this.extractCampaignUrlAndSegmentationInfo(
            experiment.data.experimentRule.trigger
          ).segmentationFilters,
        ];
      }
      campaign.type = this.getCampaignType(campaign);
      this.mappedData.experiments.push(campaign);
    });
    return this.mappedData;
  }
}

const extractor = new InfoExtractor(
  response.default,
  variablesResponse,
  builtInValueTypes
);

class VWOExporterUtil {
  static wrapJSCodeAccordingly(jsFunctionCode, toBeAsserted) {
    return `var returnValue = (${jsFunctionCode})();
                if (returnValue === ${toBeAsserted}) {
                    executeTrigger();
                };`;
  }
}

class VWOExporter {
  constructor(infoExtractor) {
    this.extractorObject = infoExtractor;
    this.campaignsObject = infoExtractor.extractInfoFromExportFile();
    this.globalVwoCampaignObject = {};
  }
  getMappedValue(valueName, valueType) {
    const segmentationConditionMap = {
      operatingSystem: {
        Macintosh: "MacOS",
        Windows: "windows",
        Linux: "linux",
      },
    };
    return segmentationConditionMap[valueType][valueName];
  }
  operatorMapper(type, isRegexPredicateAvailable, isUrlCheck) {
    let operator = 11;
    switch (type) {
      case 0: {
        operator = isUrlCheck ? 56 : 6; // matches regex;
        if (isRegexPredicateAvailable?.ignoreCase?.boolean && !isUrlCheck) {
          operator = 5; // "(case-insensitive)";
        }
        break;
      }
      case 1: {
        operator = "11"; // equal to
        break;
      }
      case 2: {
        operator = "13"; // "starts with";
        break;
      }
      case 3: {
        operator = "14"; // "ends with";
        break;
      }
      case 4: {
        operator = "7"; // "contain";
        break;
      }
      case 5: {
        operator = "16"; // "less than";
        break;
      }
      case 6: {
        operator = "46"; //"less than equal to";
        break;
      }
      case 7: {
        operator = "15"; //"greater than";
        break;
      }
      case 8: {
        operator = "45"; // "greater than equal to";
        break;
      }
      case 10: {
        operator = "11"; // matches
        break;
      }
      default: {
        operator = "unknown";
      }
    }
    return operator;
  }
  getNegation(operatorCode) {
    switch (operatorCode) {
      case "1": {
        return "2";
      }
      case "7": {
        return "8";
      }
      case "11": {
        return "12";
      }
    }
    return operatorCode;
  }
  initCampaign(campaign, cId) {
    this.globalVwoCampaignObject[cId] = {
      type: campaign.type,
      isGlobalSegmentEnabled: true,
      isPostSegmentationEnabled: true,
      name: campaign.name,
      isHeatmapEnabled: false,
      goals: [
        {
          id: 1,
          isPrimary: true,
          name: "Page Viewed",
          type: "custom-conversion",
          code: null,
          urls: [
            {
              type: "pattern",
              value: "*",
            },
          ],
          pUrls: [],
          pExcludedUrls: [],
          excludedUrls: [],
          metricId: 39769,
          calcLogic: {
            logic: "triggered",
          },
          events: [
            {
              props: [],
              id: "201-Event",
              eventDefinitionType: "STANDARD",
              queryElementType: "partialQuery",
              apiName: "vwo_pageView",
            },
          ],
          averageData: [],
        },
      ],
      urls: [
        {
          type: "url",
          value: "http://url1.com",
        },
      ],
    };
  }
  populateGlobalSegments(campaign, cId) {
    const globalSegment = {
      type: "custom",
      partialSegments: [],
    };
    const conjunctionObject = {
      queryElementType: "conjunction",
      value: "AND",
    };
    campaign.segmentationFilters.forEach((segmentArr) => {
      const toArray = (ele) => (Array.isArray(ele) ? ele : [ele]);
      const operator = this.operatorMapper(segmentArr.operatorCode);
      const newSegObj = {
        queryElementType: "partialQuery",
        id: "",
        operator: !segmentArr.isNegation
          ? parseInt(operator)
          : parseInt(this.getNegation(operator)), // add negation support;
        rOperandValue: segmentArr.rOpr,
      };
      const segmentType = segmentArr.lOpr.trim();
      switch (true) {
        case segmentType.startsWith("cookie."): {
          newSegObj.id = "5-VwoPreWebsite";
          newSegObj.lOperandValue = segmentType.split(".")[1];
          break;
        }
        case segmentType.startsWith("js."): {
          newSegObj.id = "10-VwoPreWebsite";
          newSegObj.lOperandValue = segmentType.split(".")[1];
          break;
        }
        case segmentType.startsWith("run_js."): {
          // runnable js code;
          newSegObj.id = "62-VwoPreWebsiteTrigger";
          newSegObj.rOperandValue = VWOExporterUtil.wrapJSCodeAccordingly(
            this.extractorObject.getJSCodeViaVariable(segmentType.split(".")[1])
              .runnableJsCode,
            segmentArr.rOpr
          ); // This will always be a function AFAIK;
          break;
        }
        case segmentType.startsWith("queryParam."): {
          newSegObj.id = "7-VwoPreWebsite";
          newSegObj.lOperandValue = segmentType.split(".")[1];
          break;
        }
        case segmentType === "_UTM Campaign": {
          newSegObj.id = "127-VwoPreWebsite";
          newSegObj.lOperandValue = "utm_campaign";
          break;
        }
        case segmentType === "Browser": {
          newSegObj.id = "9-VwoPreWebsite";
          newSegObj.rOperandValue = toArray(segmentArr.rOpr);
          break;
        }
        case segmentType === "Operating System": {
          newSegObj.id = "8-VwoPreWebsite";
          const validValues = [];
          toArray(segmentArr.rOpr).map((OS) => {
            const retVal = this.getMappedValue(OS, "operatingSystem");
            retVal && validValues.push(retVal);
          });
          newSegObj.rOperandValue =
            validValues.length > 0 ? validValues : "invalid";
          break;
        }
        case segmentType === "Device Category": {
          newSegObj.id = "18-VwoPreWebsite";
          newSegObj.rOperandValue = toArray(segmentArr.rOpr);
          break;
        }
        // case segmentType === "Client ID Age": { // Time since first arrival seg condition of Google optimize;
        //   newSegObj.id = "59-VwoPreWebsiteTrigger";
        //   break;
        // }
        case segmentType === "Mobile Device Info": {
          newSegObj.id = "11-VwoPreWebsite";
          break;
        }
        case segmentType === "Referrer": {
          newSegObj.id = "2-VwoPreWebsite";
          break;
        }
        default: {
          newSegObj.id = "invalid";
        }
        // case segmentType === "City ID": {
        //     newSegObj.cities = [segmentArr.rOpr];
        //     delete newSegObj.rOperandValue;
        //     newSegObj.id = "15-VwoPreWebsite";
        //     break;
        // }
        // case segmentType === "Country ID": {
        //     newSegObj.countries = [segmentArr.rOpr];
        //     delete newSegObj.rOperandValue;
        //     newSegObj.id = "15-VwoPreWebsite";
        //     break;
        // }
        // case segmentType === "Region ID": {
        //     newSegObj.regions = [segmentArr.rOpr];
        //     delete newSegObj.rOperandValue;
        //     newSegObj.id = "15-VwoPreWebsite";
        //     break;
        // }
      }
      if (newSegObj.id === "invalid") {
        // console.log("~~ ", segmentArr);
        return;
      }
      globalSegment.partialSegments.push(newSegObj);
      globalSegment.partialSegments.push(conjunctionObject);
    });
    globalSegment.partialSegments.pop(); // popping the last conjunction object;
    this.globalVwoCampaignObject[cId].globalSegment = globalSegment;
  }
  populateUrlInfoObject(campaign, cId) {
    const pageData = campaign.pages[0]; // main page is page 0;
    this.globalVwoCampaignObject[cId].primaryUrl = pageData.editor_url;
    const pageGroupConfig = {
      editorUrl: [pageData.editor_url],
      include: [],
      exclude: [],
    };
    const conjunctionObject = {
      queryElementType: "conjunction",
      value: "OR",
    };
    pageData.urlFilters.forEach((urlObject) => {
      const operator = this.operatorMapper(
        urlObject.operatorCode,
        urlObject.isRegexPredicateAvailable,
        true
      );
      if (operator == 11) {
        // In case the operator is 11, it signifies that the operation is matching/equal to and in which case only valid urls are allowed!
        try {
          new URL(urlObject.rOpr);
        } catch (err) {
          return;
        }
      }
      const urlPageObj = {
        queryElementType: "partialQuery",
        id: "90-VwoPageGroup",
        operator: parseInt(operator),
        rOperandValue: urlObject.rOpr,
        configurations: {
          ignoreOnlyQueryParams: true,
          ignoreOnlyHashFrag: true,
          caseInsensitive: true,
        },
      };
      /**
       * In case of google optimize, the url comparisons have a negation object which signifies that we should do the opposite of
       * the current operator, for ex:- "equal to" would become "not equal to" in case a negation is there etc. In case of VWO,
       * we handle the negation case by adding that same condition in the excluded url conditions.
       */
      if (!urlObject.isNegation) {
        pageGroupConfig.include.push(urlPageObj);
        pageGroupConfig.include.push(conjunctionObject);
      } else {
        pageGroupConfig.exclude.push(urlPageObj);
        pageGroupConfig.exclude.push(conjunctionObject);
      }
    });
    pageGroupConfig.include.pop();
    pageGroupConfig.exclude.pop();
    this.globalVwoCampaignObject[cId].pageGroupConfig = pageGroupConfig;
  }
  populateVariationObject(campaign, cId) {
    const variationInfo = campaign.pages[0].variationInfo[0];
    const variationArr = [];
    let id = 1;
    variationArr.push({
      id,
      name: variationInfo.original.name || "original",
      isControl: true,
      percentSplit: variationInfo.original.trafficWeight,
      isBase: true,
    });
    variationInfo.variation.forEach((variationObject) => {
      ++id,
        variationArr.push({
          id,
          name: variationObject.name,
          isControl: false,
          percentSplit: variationObject.trafficWeight,
        });
    });
    this.globalVwoCampaignObject[cId].variations = variationArr;
  }
  exportData() {
    this.campaignsObject.experiments.forEach((campaignObj, index) => {
      this.initCampaign(campaignObj, index);
      this.populateGlobalSegments(campaignObj, index);
      this.populateUrlInfoObject(campaignObj, index);
      this.populateVariationObject(campaignObj, index);
    });
    return this.globalVwoCampaignObject;
  }
}

const vwoExporter = new VWOExporter(extractor);

console.log("## ", vwoExporter.exportData());
