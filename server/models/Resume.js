const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  title: {
    type: String,
    default: "Professional Resume"
  },

  templateId: {
    type: String,
    default: "classic"
  },

  fullName: String,
  email: String,
  phone: String,

  skills: [String],

  education: String,

  experience: [
    {
      company: String,
      role: String,
      duration: String,
      description: String
    }
  ],

  projects: [
    {
      title: String,
      description: String,
      techStack: [String],
      liveUrl: String,
      githubUrl: String
    }
  ],
  

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
},
{
  timestamps: true
}
);

module.exports = mongoose.model(
  "Resume",
  resumeSchema
);