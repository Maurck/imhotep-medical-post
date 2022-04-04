// const User = require('../../../models/user');
// const { errorResponse } = require('../../../utils/responses');

const homeFlow = async (req, res) => {

    // const { user_id, subscribing, subscribe } = req.query

    try {
        // const user = await User.findById(user_id).exec()

        // if(subscribe){ await User.populate(user,{ path: 'users_subscribers_ids', model: 'User' }) } 
        // if(subscribing){ await User.populate(user,{ path: 'users_subscribing_ids', model: 'User' }) }

        return res.send('Hola Mundo');

    } catch (error) {
        console.log(error)
        return errorResponse(res, "Obtención de usuario fallida: contacte al administrador", error, 500);
    }

}

module.exports = homeFlow;