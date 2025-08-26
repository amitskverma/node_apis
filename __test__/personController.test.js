const Person = require("../model/Person");
const personController = require("../controller/personController");

// Mock the Mongoose model
jest.mock("../model/Person");

describe("Person Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { body: {}, params: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  // CREATE
  it("should create a person successfully", async () => {
    req.body = { username: "John" };
    const mockSaved = { id: "123", username: "John", save: jest.fn() };

    Person.mockImplementation(() => mockSaved);
    mockSaved.save.mockResolvedValue(mockSaved);

    await personController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      payload: { id: "123", username: "John" },
    });
  });

  // GET BY ID
  it("should return a person by id", async () => {
    req.params.id = "123";
    const mockPerson = { id: "123", username: "Alice" };
    Person.findById.mockResolvedValue(mockPerson);

    await personController.getbyid(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockPerson);
  });

  // GET ALL
  it("should return all persons", async () => {
    const mockPersons = [{ id: "1", username: "A" }, { id: "2", username: "B" }];
    Person.find.mockResolvedValue(mockPersons);

    await personController.get(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockPersons);
  });

  // EDIT
  it("should update a person", async () => {
    req.params.id = "123";
    req.body = { username: "Updated" };
    const mockUpdated = { id: "123", username: "Updated" };

    Person.findByIdAndUpdate.mockResolvedValue(mockUpdated);

    await personController.edit(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUpdated);
  });

  it("should return 404 if person not found on update", async () => {
    req.params.id = "123";
    req.body = { username: "Updated" };

    Person.findByIdAndUpdate.mockResolvedValue(null);

    await personController.edit(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Person not found" });
  });

  // DELETE
  it("should delete a person", async () => {
    req.params.id = "123";
    const mockDeleted = { id: "123", username: "DeleteMe" };

    Person.findByIdAndRemove.mockResolvedValue(mockDeleted);

    await personController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "person Deleted Successfully",
    });
  });

  it("should return 404 if person not found on delete", async () => {
    req.params.id = "999";
    Person.findByIdAndRemove.mockResolvedValue(null);

    await personController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Person not found" });
  });
});
