sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, mobileLibrary, JSONModel) {
        "use strict";
        const URLHelper = mobileLibrary.URLHelper;
        
      
        // const Apps = {
 
        //     "RFS2Specific": [
        //                 { 
        //                   "applicationName": "Maintain RFS2 Materials", 
        //                   "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainrfs2materials-0.0.1" 
        //                 }
        //           ],
        //             "Transactional": [
        //                 { 
        //                   "applicationName": "Renewable Workplace", 
        //                   "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/81177949-b9b3-476f-bd60-69a809044398.zfsrenewwrkplc.zfsrenewwrkplc-0.0.1/index.html" 
        //                 },
        //                 { 
        //                     "applicationName": "Manual Adjustment", 
        //                     "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/21c4dfe8-a0d2-4536-ad86-e6c8f00d1920.zfsmanadjui.zfsmanadjui-0.0.1/index.html#" 
        //                 },
        //                 {
        //                     "applicationName": "Log Utility",
        //                     "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/8a3eb9ae-d209-4624-8ac9-48a9ab963702.comsapchscomlogutilityservice.comsapchscomlogutilityservicezcomfelogutilityservice-0.0.1"
             
        //                 },
        //             ],
        //             "Technical": [
        //                 {
        //                     "applicationName": "Maintain Regulation Types",
        //                     "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtype-0.0.1"
        //                 },
        //                 {
        //                     "applicationName": "Maintain Transaction Types",
        //                     "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintaintransactiontype-0.0.1"
        //                 },
        //                 {
        //                     "applicationName": "Maintain Regulation Transaction Types",
        //                     "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtransactiontypets-0.0.1"
        //                 },
        //                 {
        //                     "applicationName": "Maintain Regulation Object Types",
        //                     "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationobjecttype-0.0.1"
        //                 },
        //                 {
        //                     "applicationName": "Maintain Action Sub-Scenario Mapping",
        //                     "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationsubscenarioaction-0.0.1"
        //                 },
        //                 {
        //                     "applicationName": "Maintain Regulation Sub Scenario To Scenario Assignment",
        //                     "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationsubscenariotoscenario-0.0.1"
        //                 },
        //                 {
        //                     "applicationName": "Maintain ID Range For Renewable Objects",
        //                     "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainidrangeforrenewableobjects-0.0.1"
        //                 },
        //                 {
        //                     "applicationName": "Maintain ID Range For Reconciliation Groups",
        //                     "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainidrangeforreconciliationgroups-0.0.1"
        //                 }
                        
        //             ],
        //             "Business": [ {
        //                 "applicationName": "Maintain Regulation Groups",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationgroup-0.0.1"
         
        //             },
        //             {
        //                 "applicationName": "Maintain Regulation Material Groups",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationmaterialgroup-0.0.1"
         
        //             },{
        //                 "applicationName": "Maintain Movement Type Relevancy For Scenario",
        //                 "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainmovementtype-0.0.1"
         
        //             },{
        //                 "applicationName": "Maintain Movement Type To Transaction Category Mapping",
        //                 "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainmovementtypetoteansactioncategorymapping-0.0.1"
         
        //             }, {
        //                 "applicationName": "Maintain Regulation Transaction Types With Impact",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtransactiontypebu-0.0.1"
         
        //             },{
        //                 "applicationName": "Maintain Incoterms Impact For Import / Export",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainincotermsimpactforimportorexport-0.0.1"
         
        //             },{
        //                 "applicationName": "Maintain Inventory Posting Plant",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintaininventorypostingplant-0.0.1"
         
        //             },{
        //                 "applicationName": "Maintain Company Code And Plant Mapping",
        //                 "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintaincompanyidtoplant-0.0.1"
        //            },{
        //                 "applicationName": "Maintain Adjustment Reason Codes",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainadjustmentreasoncode-0.0.1"
         
        //             },  {
        //                 "applicationName": "Maintain Date Tolerance For Auto-Match",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulationtolerancefordatematch-0.0.1"
         
        //             },{
        //                 "applicationName": "Maintain Volume Tolerance For Auto-Match",
        //                 "url": "https://CHSIncDev.launchpad.cfapps.us10.hana.ondemand.com/6d0d9d02-1710-4b5a-b05f-526ca8a4c038.comsapchscomRegCompMaster.comsapchscomzcomfemaintainregulatontoleranceforvolumematch-0.0.1"
         
        //             }
        //             ]
        //         };
        const Apps = {
            "RFS2Specific": [
                {
                    "applicationName": "Maintain RFS2 Materials",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/9b7a4fa5-f635-4bae-aeee-2ddc80da1503.comchssapzcom_mtnrfs2regmat.zfemtnrfs2regmat-0.0.1"
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
                {
                    "applicationName": "Reconciliation Group",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/7cff7a0b-6f81-49f4-ad94-c29501c3fc6e.zfsrecongrps.zfsrecongrps-0.0.1"
                },
                {
                    "applicationName": "BTP Event Staging",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/e121e4b6-6e04-42e1-96b6-2768ede21428.zcom_btpevtstg.comchssapzcombtpevtstgzfebtpevtstg-0.0.1"
                }
            ],
            "Technical": [
                {
                    "applicationName": "Maintain Regulation Type",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/13ef1f34-3934-496c-b566-7bff95a56f20.comchssapzcom_mtnregtyp.zfemtnregtyp-0.0.1/index.html"
                },
                {
                    "applicationName": "Maintain Transaction Type",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/d5d3580a-fdb3-4eb7-a201-352849fbb317.comchssapzcom_mtntxntyp.zfemtntxntyp-0.0.1/index.html"
                },
                {
                    "applicationName": "Maintain Regulation Transaction Type",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/38fc2736-0598-43b4-b068-90b7f824a35e.comchssapzcom_mtnregtxntyp.zfemtnregtxntyp-0.0.1"
                },
                {
                    "applicationName": "Maintain Regulation Object Type",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/36a4f0f6-35a7-42d8-b18d-62e0f725c4cd.comchssapzcom_mtnobjtyp.zfemtnobjtyp-0.0.1"
                },
                {
                    "applicationName": "Maintain Action Sub-Scenario Mapping",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/b723dcb8-bd17-41bd-98bb-9cee5a5630cb.comchssapzcom_mtnactsbscnasn.zfemtnactsbscnasn-0.0.1"
                },
                {
                    "applicationName": "Maintain Action Status Matrix Mapping",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/200bb61b-0e5e-44e4-8866-51c58671127b.comchssapzcom_mtnactmtxmap.zfemtnactmtxmap-0.0.1"
                },
                {
                    "applicationName": "Maintain Regulation Sub Scenario To Scenario Assignment",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/0c725d19-4b98-4b2f-8884-3a04201bdbd3.comchssapzcom_mtnsbscn2scnasn.zfemtnsbscn2scnasn-0.0.1"
                },
                {
                    "applicationName": "Maintain ID Range for Renewable Object",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/be333c4f-2c97-4265-b207-ca6bc918f506.comchssapzcom_mtnidrng4renewobj.zfemtnidrng4renewobj-0.0.1"
                },
                {
                    "applicationName": "Maintain ID Range for Reconciliation Group",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/9e2ba581-5a91-4da6-845b-a9e0551434fa.comchssapzcom_mtnidrng4recongrps.zfemtnidrng4recongrps-0.0.1"
                }
            ],
            "Business": [
                {
                    "applicationName": "Maintain Regulation Group",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/42212f7b-1a22-46bc-b8fd-25bda333c8dd.comchssapzcom_mtnreggrp.zfemtnreggrp-0.0.1"
                },
                {
                    "applicationName": "Maintain Regulation Material Group",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/303b1d89-7f70-4b1b-829c-56e09e419a5b.comchssapzcom_mtnregmatgrp.zfemtnregmatgrp-0.0.1"
                },
                {
                    "applicationName": "Maintain Sub-Scenario Movement Type Relevancy",
                    "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6e9f517a-0980-446d-9bdf-6f0532bd4520.comchssapzcom_mtnsbscnmvttyprev.zfemtnsbscnmvttyprev-0.0.1"
                },
                {
                    "applicationName": "Maintain Movement Type Transaction Mapping",
                    "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/fb0d0057-7010-44af-807c-50974f9d62db.comchssapzcom_mtnmvttyptxnmap.zfemtnmvttyptxnmap-0.0.1"         },         {             "applicationName": "Maintain Transaction Type Impact",             "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/a3346866-8bd6-48b3-984e-d30bfd2dff33.comchssapzcom_mtnregtxntypimp.zfemtnregtxntypimp-0.0.1"         },         {             "applicationName": "Maintain Incoterm Impact",             "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/5a705431-daa3-4ec5-bb97-4847842352be.comchssapzcom_mtnitimp4imptotexpt.zfemtnitimp4imptotexpt-0.0.1/index.html"         },         {             "applicationName": "Maintain Inventory Posting Plant",             "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/1e9924dd-0843-420b-b7ea-54e1a0403c2a.comchssapzcom_mtninvpstplt.zfemtninvpstplt-0.0.1"         },         {             "applicationName": "Maintain Company Code Plant Mapping",             "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/03d1cf60-369c-4553-a5b2-de2d0f25eedd.comchssapzcom_mtncoid2pltmap.zfemtncoid2pltmap-0.0.1"         },         {             "applicationName": "Maintain Business Partner EPA ID Mapping",             "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/86033b66-c786-4ad3-9a79-c572f612aea2.comchssapzcom_mtnbpepaidmap.zfemtnbpepaidmap-0.0.1"         },         {             "applicationName": "Maintain Adjustment Reason Code",             "url": "ttps://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/44210476-b17d-4922-8315-4bafb7a178fc.comchssapzcom_mtnadjrsncd.zfemtnadjrsncd-0.0.1"         },         {             "applicationName": "Maintain Auto-match Date Tolerance",             "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/257f3aee-fcca-46bb-896f-df89d78adcd6.comchssapzcom_mtnregtol4dtmtch.zfemtnregtol4dtmtch-0.0.1"         },         {             "applicationName": "Maintain Auto-match Volume Tolerance",             "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/80062591-0c3c-4272-a622-b05a7276bd7d.comchssapzcom_mtnregtol4volmtch.zfemtnregtol4volmtch-0.0.1"         }
            ]
        }
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
