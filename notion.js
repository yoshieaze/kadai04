const { Client } = require ("@notionhq/client")

const notion = new Client({auth: process.env.NOTION_API_KEY})


async function getDatabase(){
    const response = await notion.databases.retrieve({ 
        database_id: process.env.NOTION_DATABASE_ID})
    console.log(response);
} 

// getDatabase();

// Titleをセットする

function createNotesTitle (title, createdDate,agenda,todo,decision){
    notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID
        },
        properties: {
            [process.env.NOTION_TITLE_ID]:{
                title:[
                    {
                        type: "text",
                        text:{
                            content:title
                        }
                    }
                ]
            },
            "Date":{
                date:
                    {
                    //    type:"text", 
                       start: createdDate
                    }
            },                
        },
        children:[
            {
                object:'block',
                type:"heading_2",
                heading_2:{
                    text:[
                        {
                            type:"text",
                            text:{
                                content:"AGENDA"
                            }
                        }
                    ]
                }

            },
            {
                object:"block",
                type:"paragraph",
                paragraph:{
                    text:[
                        {
                            type:"text",
                            text:{
                                content:agenda
                            }
                        }
                    ]
                }

            },
            {
                object:'block',
                type:"heading_2",
                heading_2:{
                    text:[
                        {
                            type:"text",
                            text:{
                                content:"TODO"
                            }
                        }
                    ]
                }

            },
            {
                object:"block",
                type:"paragraph",
                paragraph:{
                    text:[
                        {
                            type:"text",
                            text:{
                                content:todo
                            }
                        }
                    ]
                }
            },
            {
                object:'block',
                type:"heading_2",
                heading_2:{
                    text:[
                        {
                            type:"text",
                            text:{
                                content:"DECISION"
                            }
                        }
                    ]
                }

            },
            {
                object:"block",
                type:"paragraph",
                paragraph:{
                    text:[
                        {
                            type:"text",
                            text:{
                                content:decision
                            }
                        }
                    ]
                }
            }
        ]
    })  
}
    

// createNotesTitle("2021-09-1866","2021-09-12","bbbbbbbbbbbb");


module.exports = {
    createNotesTitle
}