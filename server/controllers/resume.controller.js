const Resume = require("../models/Resume");

exports.createResume = async (req, res) => {
  try {
    if (!req.userId) {
      return res
        .status(401)
        .json({
          message:
            "Unauthorized"
        });
    }

    const resume =
      await Resume.create({
        userId:
          req.userId,
        title:
          req.body.title ||
          "My Resume",
        templateId:
          req.body
            .templateId ||
          "classic"
      });

    res.status(201).json({
      success: true,
      resume
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message:
        err.message
    });
  }
};

exports.getAllResumes =
  async (req, res) => {
    try {
      const resumes =
        await Resume.find({
          userId:
            req.userId
        }).sort({
          updatedAt: -1
        });

      res.json({
        success: true,
        resumes
      });

    } catch (err) {
      res.status(500).json({
        message:
          err.message
      });
    }
};

exports.getResume =
  async (req, res) => {
    try {
      const resume =
        await Resume.findOne({
          _id:
            req.params.id,
          userId:
            req.userId
        });

      res.json({
        success: true,
        resume
      });

    } catch (err) {
      res.status(500).json({
        message:
          err.message
      });
    }
};

exports.updateResume =
  async (req, res) => {
    try {
      const resume =
        await Resume.findOneAndUpdate(
          {
            _id:
              req.params.id,
            userId:
              req.userId
          },
          req.body,
          {
            new: true
          }
        );

      res.json({
        success: true,
        resume
      });

    } catch (err) {
      res.status(500).json({
        message:
          err.message
      });
    }
};

exports.deleteResume =
  async (req, res) => {
    try {
      await Resume.findOneAndDelete(
        {
          _id:
            req.params.id,
          userId:
            req.userId
        }
      );

      res.json({
        success: true
      });

    } catch (err) {
      res.status(500).json({
        message:
          err.message
      });
    }
};