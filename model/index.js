const Contact = require('./schemas/contactSchemas')

const contactList = async () => {
  const contactList = await Contact.find({})
  return contactList
}

const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId)
  return contact
}

const removeContact = async (contactId) => {
  const delContact = await Contact.findByIdAndDelete(contactId)
  return delContact
}

const addContact = async (body) => {
  const newContact = await Contact.create(body)
  return newContact
}

const updateContact = async (contactId, body) => {
  const updateContact = await Contact.findByIdAndUpdate(contactId, body, { new: true })
  return updateContact
}

module.exports = { contactList, getContactById, removeContact, addContact, updateContact }

// const fs = require('fs').promises
// const path = require('path')
// const { v4 } = require('uuid')
// const contactsPath = path.resolve(__dirname, './contacts.json')

// const listContacts = async () => {
//   const contactsList = await fs.readFile(contactsPath, 'utf8')
//   return JSON.parse(contactsList)
// }

// const getContactById = async (contactId) => {
//   const contactsList = JSON.parse(await fs.readFile(contactsPath, 'utf8'))
//   const contactById = contactsList.find((item) =>
//     // eslint-disable-next-line
//     String(item.id) === String(contactId)
//   )
//   return await contactById
// }

// const removeContact = async (contactId) => {
//   const contactsList = JSON.parse(await fs.readFile(contactsPath, 'utf8'))
//   const delContact = contactsList.find((item) =>
//     // eslint-disable-next-line
//     String(item.id) === String(contactId))
//   const newContactsList = contactsList.filter((item) => String(item.id) !== String(contactId))
//   await fs.writeFile(contactsPath, JSON.stringify(newContactsList))
//   return delContact
// }

// const addContact = async (body) => {
//   const contactsList = JSON.parse(await fs.readFile(contactsPath, 'utf8'))
//   const newContact = { id: v4(), ...body }
//   const newContactsList = [...contactsList, newContact]
//   await fs.writeFile(contactsPath, JSON.stringify(newContactsList))
//   return newContact
// }

// const updateContact = async (contactId, body) => {
//   const contactsList = JSON.parse(await fs.readFile(contactsPath, 'utf8'))
//   const contact = contactsList.find((item) =>
//     // eslint-disable-next-line
//     String(item.id) === String(contactId))
//   const updatingContact = { ...contact, ...body }
//   const updatingContactList = contactsList.map((item) => String(item.id) === String(contactId) ? updatingContact : item)
//   await fs.writeFile(contactsPath, JSON.stringify(updatingContactList))
//   return updatingContact
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }
