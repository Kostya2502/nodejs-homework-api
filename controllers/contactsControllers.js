const { contactList, getContactById, removeContact, addContact, updateContact } = require('../model/contacts.js')

/* eslint-disable */
const get = async (req, res, next) => {
    try {
        const contacts = await contactList()
        console.log('contacts', contacts)
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
}

const getById = async (req, res, next) => {
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
}

const add = async (req, res, next) => {
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
}

const remove = async (req, res, next) => {
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
}

const update = async (req, res, next) => {
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
}
/* eslint-enable */

module.exports = { get, getById, add, remove, update }
