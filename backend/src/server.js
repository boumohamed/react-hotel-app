import express from 'express'
import bodyParser from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb';


const app = express();
app.use(bodyParser.json());

/*  la fonction qui permet la connzction à la base deonnees */ 

const withDB = async (operations, res) => 
{
    try
    {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db('HotelDataBase');
        await operations(db);  
        client.close();
              
    } 
    catch(error)
    {
        res.status(500).send({message : 'Something went wrong ', error});
    }
    
}



/*  les logements selon leurs type (cambre || suite) */

app.get('/api/logements/:type', async (req, res) => {

    const type = req.params.type;
    
        
        withDB( async (db) =>
        {
            const logements = await db.collection('logements').find({prix : type});
            res.status(200).json(logements);
        }, res);
  
});




/* recuperer un logement specefique par son id passé en parametre de la requete  */

app.get('/api/logement/:id', async (req, res) => {

    const logId = req.params.id;
    
    var o_id = new ObjectId(logId);
        
        withDB( async (db) =>
        {
            const logement = await db.collection('logements').findOne({_id : o_id});
            res.status(200).json(logement);
        }, res);
  
});

/* recuperer tout les logements sepuis la base de données */
app.get('/api/logements/', async (req, res) => {

            
        withDB( async (db) =>
        {
            const logements = await db.collection('logements').find().toArray();
            
            res.status(200).json(logements);
        }, res);
  
});
/* inserer une réservation */
app.post('/api/reservation/insert', async (req, res) => {


    const {nom, prenom, tel, email, dateDebut, dateFin, AdminConfirmation, userCenceling} = req.body

    withDB( async (db) =>
    {
        const reservation = await db.collection("reservations").insertOne(req.body)
        const insertedReservation = await db.collection('reservations').findOne({email : email});
            res.status(200).json(insertedReservation);
       
       
    }, res);

});





app.get('/api/logement/name/:name', async (req, res) => {

    const logName = req.params.name;
    
        
        withDB( async (db) =>
        {
            const logement = await db.collection('logements').findOne({name : logName});
            res.status(200).json(logement);
        }, res);
  
});





/* Modier la disponibilité d'un logement */
app.get('/api/logement/minusdisponibilite/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
        {
            const logement = await db.collection('logements').findOne({_id : o_id});
            await db.collection('logements').updateOne({_id : o_id}, {
                "$set" : {
                    disponibilite : logement.disponibilite-1
                }});
            const ULogement = await db.collection('logements').findOne({_id : o_id});
            res.status(200).json(ULogement);
        }, res);

});
/* Modier la disponibilité d'un logement */
app.get('/api/logement/adddisponibilite/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
        {
            const logement = await db.collection('logements').findOne({_id : o_id});
            await db.collection('logements').updateOne({_id : o_id}, {
                "$set" : {
                    disponibilite : logement.disponibilite+1
                }});
            const ULogement = await db.collection('logements').findOne({_id : o_id});
            res.status(200).json(ULogement);
        }, res);

});



/* recuperer tout les reservations */
app.get('/api/reservations/', async (req, res) => {

            
    withDB( async (db) =>
    {
        const reservations = await db.collection('reservations').find().toArray();
        
        res.status(200).json(reservations);
    }, res);

});
/* recuperer une reservation par son id passé en url */
app.get('/api/reservation/:id', async (req, res) => {

    const id = req.params.id 
   
    var o_id = new ObjectId(id);      
    withDB( async (db) =>
    {
        const reservations = await db.collection('reservations').findOne({_id : o_id})
        
        
        res.status(200).json(reservations);
    }, res);

});
/* recuperer une reservation passés par un client (user) */
app.get('/api/reservation/user/:email', async (req, res) => {

    const userEmail = req.params.email    
    withDB( async (db) =>
    {
        const reservations = await db.collection('reservations').find({email : userEmail}).toArray()
        
        res.status(200).json(reservations);
    }, res);

});

/* supprimer un reservation */
app.get('/api/reservation/delete/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
    {
        const reservationDeleted = await db.collection('reservations').deleteOne({_id : o_id})
        
        res.status(200).json(reservationDeleted);
    }, res);

});
/* valider (confirmer) une reservation en changeant le champs AdminConfirmation par true */
app.get('/api/reservation/valider/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
        {
            const article = await db.collection('reservations').findOne({_id : o_id});
            await db.collection('reservations').updateOne({_id : o_id}, {
                "$set" : {
                    AdminConfirmation : true,
                }});
            const Ureservation = await db.collection('reservations').findOne({_id : o_id});
            res.status(200).json(Ureservation);
        }, res);

});
/* annuler la validation d'une reservation en changeant le champs AdminConfirmation par false */
app.get('/api/reservation/removevalidation/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
        {
            const resservation = await db.collection('reservations').findOne({_id : o_id});
            await db.collection('reservations').updateOne({_id : o_id}, {
                "$set" : {
                    AdminConfirmation : false,
                }});
            const Ureservation = await db.collection('reservations').findOne({_id : o_id});
            res.status(200).json(Ureservation);
        }, res);

});
/* requete qui permet d'annuler un reeervation */
app.get('/api/reservation/setcancel/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
        {
            const resservation = await db.collection('reservations').findOne({_id : o_id});
            await db.collection('reservations').updateOne({_id : o_id}, {
                "$set" : {
                    userCenceling : true,
                }});
            const Ureservation = await db.collection('reservations').findOne({_id : o_id});
            res.status(200).json(Ureservation);
        }, res);

});


/* inserer un nouvel utilisateur */

app.post('/api/user/insert/', async (req, res) => {


    const {nom, prenom, tel, email, username} = req.body
    
    
    withDB( async (db) =>
    {
        const user = await db.collection("users").insertOne({username: username, nom:nom, prenom: prenom , tel:tel, email: email})
        const insertedUser = await db.collection('users').findOne({email : email});
            res.status(200).json(insertedUser);

    }, res);

});
/* recuperer l'utilisateur par son email passé en url */

app.get('/api/user/:email', async (req, res) => {

    const userEmail = req.params.email;
    
        
        withDB( async (db) =>
        {
            const user = await db.collection('users').findOne({email : userEmail});
            res.status(200).json(user);
        }, res);
  
});
/* inserer un nouveau message */
app.post('/api/message/insert/', async (req, res) => {


    const {user, email, msg, date} = req.body
    
    
    withDB( async (db) =>
    {
        const message = await db.collection("messages").insertOne({message: msg, username: user, date: date, email: email})
        const insertedMessage = await db.collection('messages').findOne({email : email});
            res.status(200).json(insertedUser);

    }, res);

});
/* recuperer tout les messages */
app.get('/api/messages/', async (req, res) => {

    withDB( async (db) =>
    {
        const message = await db.collection('messages').find().toArray();
        
        res.status(200).json(message);
    }, res);

});

/* recuperer un message par son id passé en url */

app.get('/api/message/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
    {
        const message = await db.collection('messages').findOne({_id : o_id})
        res.status(200).json(message);
    }, res);

});

/* supprimer un message par son id passé en url */

app.get('/api/message/delete/:id', async (req, res) => {

    const id = req.params.id 
    var o_id = new ObjectId(id)

    withDB( async (db) =>
    {
        const messageDeleted = await db.collection('messages').deleteOne({_id : o_id})
        
        res.status(200).json(messageDeleted);
    }, res);

});

/* identifier un port pour l'ecoute de server */
app.listen(8000, () => console.log('listenning on port 8000'))