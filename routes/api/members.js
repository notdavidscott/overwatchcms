const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");


// Post model
const Member = require("../../models/Member");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validateMemberInput = require("../../validation/member");

// @route   GET api/members/test
// @desc    Tests member route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Members Works" }));

// @route   GET api/members
// @desc    Get members
// @access  Public
router.get("/", (req, res) => {
  Member.find({})
    .populate("user")
    .sort({}) //alphabetical sort 
    .then(members => {
      return res.json(members);
    })
    .catch(err => res.status(404).json({ nomembersfound: "No Members found" }));
});

// @route   GET api/members/:id
// @desc    Get member by id
// @access  Public
router.get("/:id", (req, res) => {
  Member.findById(req.params.id)
    .then(member => res.json(member))
    .catch(err =>
      res.status(404).json({ nomemberfound: "ID did not pull up a member" })
    );
});

// @route   member api/members
// @desc    Create member
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMemberInput(req.body);
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newMember = new Member({
      user: req.user.id,
      name: req.body.name,
      phone: req.body.phone, 
      email: req.body.email
    });

    newMember.save().then(member => {
      Member.findById(member._id)
        .populate("user")
        .then(member => {
          // console.log(member);
          return res.json(member);
        });
    });
  }
);

// @route   EDIT api/members/:id
// @desc    EDIT and UPDATE post
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // check validation
    const { errors, isValid } = validateMemberInput(req.body);

    const memberFields = {};
    memberFields.user = req.user.id;
    if (req.body.title) memberFields.title = req.body.title;
    if (req.body.name) memberFields.name = req.body.name;
    if (req.body.phone) memberFields.phone = req.body.phone;
    if (req.body.email) memberFields.email = req.body.email;
    Member.findById(req.params.id).then(member => {      
        // UPDATE MEMBER
        Member.findOneAndUpdate(
          { _id: req.params.id },
          { $set: memberFields },
          { new: true }
        ).then(member => res.json(member));
      });
  }
);

// @route   DELETE api/members/:id
// @desc    Delete a Member
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Member.findById(req.params.id)
        .then(member => {
         
          // Delete
          member.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: "No Member Found" }));
    });
  }
);

module.exports = router;
