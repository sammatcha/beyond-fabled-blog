import { CollectionConfig } from "payload";

export const Users: CollectionConfig= {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        
    ]
}