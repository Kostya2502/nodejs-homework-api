const express = require('express')
const router = express.Router()
const { listContacts, getContactById, addContact, removeContact, updateContact } = require('../../model/index')

router.get('/', async (req, res, next) => {
  try {
    const contacts = await listContacts()
    console.log(contacts)
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts
      }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = await getContactById(contactId)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found'
      })
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const contact = await addContact(req.body)
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        contact
      }
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const contact = await removeContact(req.params.contactId)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        message: 'contact deleted'
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found'
      })
    }
  } catch (error) {
    next(error)
  }
})

router.patch('/:contactId', async (req, res, next) => {
  try {
    const contact = await updateContact(req.params.contactId, req.body)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found'
      })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
