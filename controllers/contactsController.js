const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ id: contact._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
