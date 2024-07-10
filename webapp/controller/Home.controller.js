sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, mobileLibrary, JSONModel) {
        "use strict";
        const URLHelper = mobileLibrary.URLHelper;
        
      
        const Apps = {
 
            "RFS2Specific": [
                        { 
                          "applicationName": "Maintain RFS2 Materials", 
                          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainrfs2materials-0.0.1" 
                        }
                  ],
                    "Transactional": [
                        { 
                          "applicationName": "Renewable Workplace", 
                          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/b8484b35-8c4f-4d1a-9b44-51728c319a92.comsapchscomzcomfsrenwpl.zcomfsrenwpl-0.0.1/index.html" 
                        },
                        { 
                            "applicationName": "Manual Adjustment", 
                            "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/8d08cc6b-4ff7-445e-a527-bf1742cbca9a.comsapchscom.comsapchscomzcomferegcompmadj-0.0.1" 
                        },
                        {
                            "applicationName": "Log Utility",
                            "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/8a3eb9ae-d209-4624-8ac9-48a9ab963702.comsapchscomlogutilityservice.comsapchscomlogutilityservicezcomfelogutilityservice-0.0.1"
             
                        },
                    ],
                    "Technical": [
                        {
                            "applicationName": "Maintain Regulation Types",
                            "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtype-0.0.1"
                        },
                        {
                            "applicationName": "Maintain Transaction Types",
                            "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintaintransactiontype-0.0.1"
                        },
                        {
                            "applicationName": "Maintain Regulation Transaction Types",
                            "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtransactiontypets-0.0.1"
                        },
                        {
                            "applicationName": "Maintain Regulation Object Types",
                            "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationobjecttype-0.0.1"
                        },
                        {
                            "applicationName": "Maintain Action Sub-Scenario Mapping",
                            "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationsubscenarioaction-0.0.1"
                        },
                        {
                            "applicationName": "Maintain Regulation Sub Scenario To Scenario Assignment",
                            "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationsubscenariotoscenario-0.0.1"
                        },
                        {
                            "applicationName": "Maintain ID Range For Renewable Objects",
                            "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainidrangeforrenewableobjects-0.0.1"
                        },
                        {
                            "applicationName": "Maintain ID Range For Reconciliation Groups",
                            "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainidrangeforreconciliationgroups-0.0.1"
                        }
                        
                    ],
                    "Business": [ {
                        "applicationName": "Maintain Regulation Groups",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationgroup-0.0.1"
         
                    },
                    {
                        "applicationName": "Maintain Regulation Material Groups",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationmaterialgroup-0.0.1"
         
                    },{
                        "applicationName": "Maintain Movement Type Relevancy For Scenario",
                        "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainmovementtype-0.0.1"
         
                    },{
                        "applicationName": "Maintain Movement Type To Transaction Category Mapping",
                        "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainmovementtypetoteansactioncategorymapping-0.0.1"
         
                    }, {
                        "applicationName": "Maintain Regulation Transaction Types With Impact",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtransactiontypebu-0.0.1"
         
                    },{
                        "applicationName": "Maintain Incoterms Impact For Import / Export",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainincotermsimpactforimportorexport-0.0.1"
         
                    },{
                        "applicationName": "Maintain Inventory Posting Plant",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintaininventorypostingplant-0.0.1"
         
                    },{
                        "applicationName": "Maintain Company Code And Plant Mapping",
                        "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintaincompanyidtoplant-0.0.1"
                   },{
                        "applicationName": "Maintain Adjustment Reason Codes",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainadjustmentreasoncode-0.0.1"
         
                    },  {
                        "applicationName": "Maintain Date Tolerance For Auto-Match",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtolerancefordatematch-0.0.1"
         
                    },{
                        "applicationName": "Maintain Volume Tolerance For Auto-Match",
                        "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulatontoleranceforvolumematch-0.0.1"
         
                    }
                    ]
                };
    
        return Controller.extend("com.chs.launchpad.controller.Home", {
            onInit: function () {
                let oModel = new JSONModel(Apps);
                this.getView().setModel(oModel)
            },
            onPressTile: function (sUrl) {
                URLHelper.redirect(sUrl, false)
            }
        });
    });
