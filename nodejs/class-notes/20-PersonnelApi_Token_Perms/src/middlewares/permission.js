"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
//Permission control middleware


module.exports = {
   isLogin: (req, res, next) => {
      if (req.user && req.user.isActive) {
         next()
      } else {
         res.errorStatusCode = 403
         throw new Error('No permission You must login')
      }
   },

   isAdmin: (req, res, next) => {
      if (req.user && req.user.isActive && req.user.isAdmin) {
         next()
      } else {
         res.errorStatusCode = 403
         throw new Error('No permission You must login and to be admin')
      }

   },

   isLeadOrLead: (req, res, next) => {
      if (req.user && req.user.isActive && (req.user.isAdmin || req.user.isLead)) {
         next()
      } else {
         res.errorStatusCode = 403
         throw new Error('No permission You must login and to be Admin or Department Lead')
      }

   }
}

/* ------------------------------------------------------- */