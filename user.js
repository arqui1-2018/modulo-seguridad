const { Router } = require('express');
//const pool = require('./db');
//const { hash, Session } = require('./helper');

const router = new Router();

router.get('/all', (req, res, next) => {
  console.log('req.body sd', req.body);
  const x = 0;
  x =  1;
  res.json({message: 'completed!'});
});


router.post('/new', (req, res, next) => {
    console.log('req.body sd', req.body);
  /* pool.query(
    'SELECT * FROM users WHERE username_hash = $1',
    [username_hash],
    (q0_err, q0_res) => {
      if(q0_err) return next(q0_err);

      if(q0_res.rows.length === 0){
        //Insert new username
        pool.query(
          'INSERT INTO users(username_hash, password_hash) VALUES($1, $2)', 
          [username_hash, hash(password)], 
          (q1_err, q1_res) => {
            if(q1_err) return next(q1_err);
            
            //Set cookie
            set_session(username, res).then(() => {
              res.json({
                msg: 'Succesfully created user!'
              });
            })
            .catch(error => next(error));
          }
        )
      }else{
        res.status(409).json({
          type: 'error',
          msg: 'This username has been taken'
        });
      }
    }
  ) */
});

module.exports = router;