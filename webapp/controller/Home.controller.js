sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";
    const Apps = {
      "RFS2Specific": [
        {
          "applicationName": "Maintain RFS2 Materials",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/d1031bf2-1fa5-4085-9b77-19dbce730108.comchssapzcom_mtnrfs2regmat.zfemtnrfs2regmat-0.0.1",
        },
      ],
      "Transactional": [
        {
          "applicationName": "Renewable Workplace",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/38730c38-1d1d-4b1a-b77e-24b13d097267.zfsrenewwrkplc.zfsrenewwrkplc-0.0.1/index.html",
        },
        {
          "applicationName": "Manual Adjustment",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/8ac03330-15f7-4dc6-bb0e-ea8e38d56504.comchssapzcom_manadjui.zfsmanadjui-0.0.1",
        },
        {
          "applicationName": "Log Utility",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/1ace1d60-d8d6-42fc-af1b-bc2cc169e855.comchssapzcom_lgutilsrv.zfelgutilsrv-0.0.1",
        },
        {
          "applicationName": "Reconciliation Group",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/94f13e64-f875-4ac6-8e39-549c3169dc6e.comchssapzcom_recongrps.zfsrecongrps-0.0.1/index.html",
        },
        {
          "applicationName": "BTP Event Staging",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/1f3d3aaf-f552-485d-8ca4-b00c22e6b78f.comchssapzcom_btpevtstg.zfebtpevtstg-0.0.1",
        },
        {
          "applicationName": "S/4HANA Event Staging ",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/e2168ac7-6c6d-4864-a64e-fd7b6a123376.comchssapzcom_s4evtstg.zfes4evtstg-0.0.1/index.html#/?sap-iapp-state--history=1&sap-iapp-state=4",
        },
        {
          "applicationName": "EMTS Event Staging ",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/040bac45-8ab0-46e3-b8a7-989af314e2ab.comchssapzcom_emtsstg.zfeemtsstg-0.0.1",
        }
      ],
      "Technical": [
        {
          "applicationName": "Maintain Regulation Type",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/13ef1f34-3934-496c-b566-7bff95a56f20.comchssapzcom_mtnregtyp.zfemtnregtyp-0.0.1/index.html",
        },
        {
          "applicationName": "Maintain Transaction Type",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/d5d3580a-fdb3-4eb7-a201-352849fbb317.comchssapzcom_mtntxntyp.zfemtntxntyp-0.0.1/index.html",
        },
        {
          "applicationName": "Maintain Regulation Transaction Type",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/38fc2736-0598-43b4-b068-90b7f824a35e.comchssapzcom_mtnregtxntyp.zfemtnregtxntyp-0.0.1",
        },
        {
          "applicationName": "Maintain Regulation Object Type",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/36a4f0f6-35a7-42d8-b18d-62e0f725c4cd.comchssapzcom_mtnobjtyp.zfemtnobjtyp-0.0.1",
        },
        {
          "applicationName": "Maintain Action Sub-Scenario Mapping",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/b723dcb8-bd17-41bd-98bb-9cee5a5630cb.comchssapzcom_mtnactsbscnasn.zfemtnactsbscnasn-0.0.1",
        },
        {
          "applicationName": "Maintain Action Status Matrix Mapping",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/200bb61b-0e5e-44e4-8866-51c58671127b.comchssapzcom_mtnactmtxmap.zfemtnactmtxmap-0.0.1",
        },
        {
          "applicationName":
            "Maintain Regulation Sub Scenario To Scenario Assignment",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/0c725d19-4b98-4b2f-8884-3a04201bdbd3.comchssapzcom_mtnsbscn2scnasn.zfemtnsbscn2scnasn-0.0.1",
        },
        {
          "applicationName": "Maintain ID Range for Renewable Object",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/be333c4f-2c97-4265-b207-ca6bc918f506.comchssapzcom_mtnidrng4renewobj.zfemtnidrng4renewobj-0.0.1",
        },
        {
          "applicationName": "Maintain ID Range for Reconciliation Group",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/9e2ba581-5a91-4da6-845b-a9e0551434fa.comchssapzcom_mtnidrng4recongrps.zfemtnidrng4recongrps-0.0.1",
        },
      ],
      "Business": [
        {
          "applicationName": "Maintain Regulation Group",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/42212f7b-1a22-46bc-b8fd-25bda333c8dd.comchssapzcom_mtnreggrp.zfemtnreggrp-0.0.1",
        },
        {
          "applicationName": "Maintain Regulation Material Group",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/303b1d89-7f70-4b1b-829c-56e09e419a5b.comchssapzcom_mtnregmatgrp.zfemtnregmatgrp-0.0.1",
        },
        {
          "applicationName": "Maintain Sub-Scenario Regulation Movement Type",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/6e9f517a-0980-446d-9bdf-6f0532bd4520.comchssapzcom_mtnsbscnmvttyprev.zfemtnsbscnmvttyprev-0.0.1",
        },
        {
          "applicationName": "Maintain Movement Type Transaction Mapping",
          "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/fb0d0057-7010-44af-807c-50974f9d62db.comchssapzcom_mtnmvttyptxnmap.zfemtnmvttyptxnmap-0.0.1",
        },
        {
          "applicationName": "Maintain Transaction Type Impact",
          "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/a3346866-8bd6-48b3-984e-d30bfd2dff33.comchssapzcom_mtnregtxntypimp.zfemtnregtxntypimp-0.0.1",
        },
        {
          "applicationName": "Maintain Incoterm Impact",
          "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/5a705431-daa3-4ec5-bb97-4847842352be.comchssapzcom_mtnitimp4imptotexpt.zfemtnitimp4imptotexpt-0.0.1/index.html",
        },
        {
          "applicationName": "Maintain Inventory Posting Plant",
          "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/1e9924dd-0843-420b-b7ea-54e1a0403c2a.comchssapzcom_mtninvpstplt.zfemtninvpstplt-0.0.1",
        },
        {
          "applicationName": "Maintain Company Code Plant Mapping",
          "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/03d1cf60-369c-4553-a5b2-de2d0f25eedd.comchssapzcom_mtncoid2pltmap.zfemtncoid2pltmap-0.0.1",
        },
        {
          "applicationName": "Maintain Business Partner EPA ID Mapping",
          "url": " https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/86033b66-c786-4ad3-9a79-c572f612aea2.comchssapzcom_mtnbpepaidmap.zfemtnbpepaidmap-0.0.1",
        },
        {
          "applicationName": "Maintain Adjustment Reason Code",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/44210476-b17d-4922-8315-4bafb7a178fc.comchssapzcom_mtnadjrsncd.zfemtnadjrsncd-0.0.1",
        },
        {
          "applicationName": "Maintain Auto-match Date Tolerance",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/f0ec65fb-229c-4038-8279-5c04aea0d5d8.comchssapzcom_mtnregtol4dtmtch.zfemtnregtol4dtmtch-0.0.1/index.html",
        },
        {
          "applicationName": "Maintain Auto-match Volume Tolerance",
          "url": "https://chsincdev.launchpad.cfapps.us10.hana.ondemand.com/b0e38d79-ed98-4c0c-8de1-9344d3c1a0cb.comchssapzcom_mtnregtol4volmtch.zfemtnregtol4volmtch-0.0.1/index.html"
        },
      ]
    };
    return Controller.extend("com.chs.launchpad.controller.Home", {
      onInit: function () {
        let oModel = new JSONModel(Apps);
        this.getView().setModel(oModel);
      },
      onPressTile: function (surl) {
        sap.m.URLHelper.redirect(surl, false);
      },
    });
  }
);
