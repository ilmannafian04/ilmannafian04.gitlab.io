import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

interface SkillSectionProps {
    proficiency: string;
    skills: string[][];
}

const skillsStub: SkillSectionProps[] = [
    {
        proficiency: 'Good',
        skills: [
            ['Django', 'NestJS'],
            ['Python', 'JavaScript', 'TypeScript'],
            ['Docker', 'GitLab CI'],
        ],
    },
    {
        proficiency: 'Good',
        skills: [
            ['Django', 'NestJS'],
            ['Python', 'JavaScript', 'TypeScript'],
            ['Docker', 'GitLab CI'],
        ],
    },
    {
        proficiency: 'Good',
        skills: [
            ['Django', 'NestJS'],
            ['Python', 'JavaScript', 'TypeScript'],
            ['Docker', 'GitLab CI'],
        ],
    },
    {
        proficiency: 'Good',
        skills: [
            ['Django', 'NestJS'],
            ['Python', 'JavaScript', 'TypeScript'],
            ['Docker', 'GitLab CI'],
        ],
    },
];

const SkillSection: FunctionComponent<SkillSectionProps> = (props: SkillSectionProps) => {
    return (
        <Box flexDirection="column">
            <Typography variant="h4">{props.proficiency}</Typography>
            <List>
                {props.skills.map((skillList, index) => {
                    return (
                        <Box key={index}>
                            {skillList.map((skill, index1) => {
                                return (
                                    <ListItem key={`${index}-${index1}`}>
                                        <ListItemText primary={skill} />
                                    </ListItem>
                                );
                            })}
                            {index < props.skills.length - 1 ? <Divider /> : null}
                        </Box>
                    );
                })}
            </List>
        </Box>
    );
};

const Skill: FunctionComponent = () => {
    return (
        <>
            <Typography variant="h2">Skills</Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={1}>
                {skillsStub.map((value, index) => {
                    return <SkillSection key={index} proficiency={value.proficiency} skills={value.skills} />;
                })}
            </Box>
        </>
    );
};

export default Skill;
