const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan((tokens, req, res) => {
    const stringParts = [];
    const method = tokens.method(req, res);
    stringParts.push(method);
    stringParts.push(tokens.url(req, res));
    stringParts.push(tokens.status(req, res));
    stringParts.push(tokens.res(req, res, 'content-length'));
    stringParts.push("-");
    stringParts.push(tokens['response-time'](req, res));
    stringParts.push('ms');
    if (method === "POST") {
        stringParts.push(JSON.stringify(req.body));
    }
    return stringParts.join(' ');
  }));


const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0;
    return maxId + 1
};

const isBlank = (str) => !str || !str.length || /^\s*$/.test(str);

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "Ian Smith",
        "number": "39-23-6342357",
        "id": 5
    }
];

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/info', (req, res) => {
    const response = `<div><p>Phonebook has info for ${persons.length} persons</p><p>${new Date().toString()}</p></div>`
    res.send(response);
});


app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
});

app.post('/api/persons/', (request, response) => {
    const body = request.body;

    if (isBlank(body.name)) {
        return response.status(400).json({
            error: 'name is missing'
        });
    }
    if (isBlank(body.number)) {
        return response.status(400).json({
            error: 'number is missing'
        });
    }
    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        });
    }
    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    };

    persons = persons.concat(person);

    response.json(person);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
