const request = require("supertest");
const app = require("../app");

jest.mock("../db/repositories/articleRepository", () => {
    getArticles: jest.fn(async () => {
        return [
            {
                title: "test1",
                description: "testDescr1",
            },
            {
                title: "test2",
                description: "testDescr2",
            }
        ];
    })
})

it("should return array with 2 articles", async function() {
    const expectArray = [
        {
            title: "test1",
            description: "testDescr1",
        },
        {
            title: "test2",
            description: "testDescr2",
        }
    ];

    request(app)
        .get("/articles")
        .expect(expectArray);
})