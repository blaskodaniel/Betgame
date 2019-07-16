import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { loadProfile } from "../../_services/getData";
import "./Profil.css";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(1,1,1,0.72)",
    padding: "20px",
    color: "white"
  },
  form: {
    width: "100%",
    color: "white",
    marginTop: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: "white"
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  },
  leftalign: {
    textAlign: "left"
  },
  rightalign: {
    textAlign: "right"
  },
  centeralign: {
    textAlign: "center"
  }
}));

// Amit kapunk a store-ból (mapStateToProps)
const mapStateToProps = (state, match) => {
  return {
    user: state.Login
  };
};

const Profile = ({ user }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({...user, fullname:""});

  useEffect(() => {
    async function loadProfileData(userid) {
      const result = await loadProfile(userid);

      console.log("Userprofile: "+JSON.stringify(result.data));
      setValues({...result.data, fullname:""})
    }
    loadProfileData(user.id);
  }, {});

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
  };
  return (
    <Container component="div" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        {values.username} - {values.score}
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.textField}
            id="email"
            label="Email"
            fullWidth
            helperText="your email address"
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="fullname"
            label="fullname"
            fullWidth
            helperText="your fullname"
            value={values.fullname}
            onChange={handleChange("fullname")}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="username"
            label="Username"
            fullWidth
            helperText="your username"
            value={values.username}
            onChange={handleChange("username")}
            margin="normal"
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <p className={classes.centeralign}>Elfelejtettem a jelszavam</p>
            </Grid>
            <Grid item xs>
              <p className={classes.centeralign}>Regisztráció</p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(connect(mapStateToProps)(Profile));
