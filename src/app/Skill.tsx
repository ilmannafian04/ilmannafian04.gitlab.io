import { useQuery } from '@apollo/react-hooks';
import { createStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { gql } from 'apollo-boost';
import React, { FunctionComponent } from 'react';

export interface Skill {
    name: string;
    proficiency: string;
    category: string;
}

interface SkillsData {
    skills: Skill[];
}

interface SkillSectionProps {
    category: string;
    skillsData?: SkillsData;
    loading: boolean;
}

const SKILLS_QUERY = gql`
    {
        skills {
            name
            proficiency
            category
        }
    }
`;

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

const processRawSkillsData = (category: string, data: SkillsData): string[][] =>
    ['proficient', 'familiar', 'learning', 'tried'].map((proficiency) =>
        data.skills
            .filter((skill) => skill.category === category && skill.proficiency === proficiency)
            .map((skill) => skill.name),
    );

const SkillSection: FunctionComponent<SkillSectionProps> = (props: SkillSectionProps) => {
    const classes = useStyles();
    if (!props.loading && props.skillsData !== undefined) {
        const skills = processRawSkillsData(props.category, props.skillsData);
        if (
            skills.reduce(
                (skillsIsNotEmpty, skillInProficiency) => skillsIsNotEmpty || skillInProficiency.length > 0,
                false,
            )
        ) {
            return (
                <>
                    {skills.map((skillInProficiency, index1) =>
                        skillInProficiency.map((skill, index2) => (
                            <ListItem key={`section-item-${index1}-${index2}`} className={classes.skillItem}>
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography color={index1 < 2 ? 'textPrimary' : 'textSecondary'}>
                                            {skill}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        )),
                    )}
                </>
            );
        }
    }
    const skeletons = [];
    for (let i = 0; i < Math.floor(Math.random() * (7 - 3 + 1)) + 3; i++) {
        skeletons.push(
            <ListItem key={`section-skeleton-${props.category}-${i}`}>
                <ListItemText primary={<Skeleton width={`${Math.floor(Math.random() * (60 - 20 + 1)) + 20}%`} />} />
            </ListItem>,
        );
    }
    return <>{skeletons.map((skeleton) => skeleton)}</>;
};

const Skill: FunctionComponent = () => {
    const { loading, error, data } = useQuery<SkillsData>(SKILLS_QUERY);
    if (error) {
        console.log(error);
    }
    return (
        <>
            <Typography variant="h2">Skills</Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around" mt={1}>
                {['framework', 'technology', 'language'].map((category, index) => {
                    return (
                        <Box key={`section-${category}-${index}`} flexDirection="column" flexGrow={1} ml={1} my={2}>
                            <Box pr={5}>
                                <Typography variant="h4">
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Typography>
                            </Box>
                            <List>
                                <SkillSection category={category} loading={loading} skillsData={data} />
                            </List>
                        </Box>
                    );
                })}
            </Box>
        </>
    );
};

export default Skill;
