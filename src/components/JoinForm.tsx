import React, { useState } from 'react';
import { Send, Loader2, Plus, X } from 'lucide-react';
import Card from './shared/Card';
import Button from './shared/Button';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regNo: '',
    branch: '',
    year: '',
    phone: '',
    whyJoin: '',
    technicalSkills: [] as string[],
    areasOfInterest: [] as string[],
    currentClubs: [] as string[],
    previousProjects: '',
    githubProfile: '',
    linkedinProfile: '',
    expectations: '',
    referral: '',
    department: '',
    newSkill: '', // For skill input
    newClub: '', // For club input
    newInterest: '', // For interest input
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const departments = [
    'Web Development',
    'App Development',
    'Artificial Intelligence',
    'Cybersecurity',
    'Competitive Programming',
    'Design',
    'Management',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addItem = (field: 'technicalSkills' | 'currentClubs' | 'areasOfInterest', inputField: 'newSkill' | 'newClub' | 'newInterest') => {
    if (formData[inputField].trim()) {
      setFormData(prev => ({
        ...prev,
        [field]: [...prev[field], prev[inputField]],
        [inputField]: ''
      }));
    }
  };

  const removeItem = (field: 'technicalSkills' | 'currentClubs' | 'areasOfInterest', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
          <p className="text-gray-600">Thank you for your interest in joining ACM VIT Chennai. We'll review your application and get back to you soon.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <Card className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Join ACM VIT Chennai
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input w-full rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input w-full rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                <input
                  type="text"
                  name="regNo"
                  required
                  value={formData.regNo}
                  onChange={handleChange}
                  className="form-input w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Academic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                <select
                  name="branch"
                  required
                  value={formData.branch}
                  onChange={handleChange}
                  className="form-select w-full rounded-lg"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">Computer Science</option>
                  <option value="IT">Information Technology</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="EEE">Electrical & Electronics</option>
                  <option value="MECH">Mechanical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="form-select w-full rounded-lg"
                >
                  <option value="">Select Year</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Department</label>
                <select
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="form-select w-full rounded-lg"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <div className="flex gap-2 flex-wrap">
              {formData.technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeItem('technicalSkills', index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="newSkill"
                value={formData.newSkill}
                onChange={handleChange}
                placeholder="Add a skill"
                className="form-input flex-1 rounded-lg"
              />
              <Button
                type="button"
                onClick={() => addItem('technicalSkills', 'newSkill')}
                icon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
          </div>

          {/* Current Clubs */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Current Club Memberships</h3>
            <div className="flex gap-2 flex-wrap">
              {formData.currentClubs.map((club, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {club}
                  <button
                    type="button"
                    onClick={() => removeItem('currentClubs', index)}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="newClub"
                value={formData.newClub}
                onChange={handleChange}
                placeholder="Add a club"
                className="form-input flex-1 rounded-lg"
              />
              <Button
                type="button"
                onClick={() => addItem('currentClubs', 'newClub')}
                icon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Areas of Interest</h3>
            <div className="flex gap-2 flex-wrap">
              {formData.areasOfInterest.map((interest, index) => (
                <span
                  key={index}
                  className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {interest}
                  <button
                    type="button"
                    onClick={() => removeItem('areasOfInterest', index)}
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="newInterest"
                value={formData.newInterest}
                onChange={handleChange}
                placeholder="Add an area of interest"
                className="form-input flex-1 rounded-lg"
              />
              <Button
                type="button"
                onClick={() => addItem('areasOfInterest', 'newInterest')}
                icon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Additional Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Previous Projects</label>
              <textarea
                name="previousProjects"
                value={formData.previousProjects}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your previous projects..."
                className="form-textarea w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Profile</label>
                <input
                  type="url"
                  name="githubProfile"
                  value={formData.githubProfile}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  className="form-input w-full rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="form-input w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Motivation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Motivation</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join ACM?</label>
              <textarea
                name="whyJoin"
                required
                value={formData.whyJoin}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us why you want to join ACM and what you hope to achieve..."
                className="form-textarea w-full rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">What are your expectations from ACM?</label>
              <textarea
                name="expectations"
                required
                value={formData.expectations}
                onChange={handleChange}
                rows={4}
                placeholder="What do you expect to learn and achieve as an ACM member?"
                className="form-textarea w-full rounded-lg"
              />
            </div>
          </div>

          {/* Referral */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Referral (Optional)</label>
            <input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              placeholder="Were you referred by an ACM member?"
              className="form-input w-full rounded-lg"
            />
          </div>

          <Button
            type="submit"
            loading={loading}
            icon={<Send className="h-5 w-5" />}
            className="w-full"
          >
            Submit Application
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default JoinForm;