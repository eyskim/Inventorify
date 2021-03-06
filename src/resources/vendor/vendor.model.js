import mongoose from 'mongoose'

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

vendorSchema.index({ name: 1 }, { unique: true })

export const Vendor = mongoose.model('vendor', vendorSchema)
