import { createStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() =>
    createStyles({
        skillItem: {
            padding: 1,
        },
        skillSection: {
            minWidth: '15rem',
        },
    }),
);

interface SkillSectionProps {
    categories: string;
    skills: string[][];
}

const skillsStub: SkillSectionProps[] = [
    {
        categories: 'Framework',
        skills: [['Django'], ['ReactJS'], ['NestJS'], ['Angular', 'Spring']],
    },
    {
        categories: 'Technology',
        skills: [['GIT', 'GitLab CI'], ['Docker'], ['GraphQL', 'MQ'], ['gRPC', 'ELK stack']],
    },
    {
        categories: 'Language',
        skills: [['Python', 'Javascript', 'Typescript'], ['Java', 'HTML', 'SQL'], ['CSS'], ['C']],
    },
];

const SkillSection: FunctionComponent<SkillSectionProps> = (props: SkillSectionProps) => {
    const classes = useStyles();
    return (
        <Box flexDirection="column" flexGrow={1} ml={1} my={2}>
            <Box pr={5}>
                <Typography variant="h4">{props.categories}</Typography>
            </Box>
            <List>
                {props.skills.map((skillList, index) => {
                    return skillList.map((skill, index1) => {
                        return (
                            <ListItem key={`${index}-${index1}`} className={classes.skillItem}>
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography color={index < 2 ? 'textPrimary' : 'textSecondary'}>
                                            {skill}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        );
                    });
                })}
            </List>
        </Box>
    );
};

const Skill: FunctionComponent = () => {
    return (
        <>
            <Typography variant="h2">Skills</Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around" mt={1}>
                {skillsStub.map((value, index) => {
                    return <SkillSection key={index} categories={value.categories} skills={value.skills} />;
                })}
            </Box>
        </>
    );
};

export default Skill;
