import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import update from 'immutability-helper';
import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';

import { Skill } from '../Skill';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

const ADD_SKILL = gql`
    mutation AddSkill($name: String!, $proficiency: String!, $category: String!) {
        addSkill(newSkillInput: { name: $name, proficiency: $proficiency, category: $category }) {
            name
            proficiency
            category
        }
    }
`;

const SkillForm: FunctionComponent = () => {
    const classes = useStyles();
    const [skillFormState, setSkillFormState] = useState<Skill>({ name: '', proficiency: '', category: '' });
    const [addSkill] = useMutation<Skill>(ADD_SKILL);
    const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        setSkillFormState(
            update(skillFormState, {
                [target.name]: { $set: target.value },
            }),
        );
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        addSkill({ variables: skillFormState }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <Box className={classes.root}>
                <TextField
                    onChange={handleFormChange}
                    value={skillFormState.name}
                    name="name"
                    label="Name"
                    required={true}
                />
                <TextField
                    onChange={handleFormChange}
                    value={skillFormState.proficiency}
                    name="proficiency"
                    label="Proficiency"
                    required={true}
                />
                <TextField
                    onChange={handleFormChange}
                    value={skillFormState.category}
                    name="category"
                    label="Category"
                    required={true}
                />
            </Box>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default SkillForm;
