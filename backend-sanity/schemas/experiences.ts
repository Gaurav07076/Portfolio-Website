export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name:'icon',
            title:'Icon',
            type: 'string',
            options: {
              hotspot: true,
            },
        }
    ]
}