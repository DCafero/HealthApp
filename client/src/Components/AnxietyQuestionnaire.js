import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function AnxietyQuestionnaire() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">1) Feeling nervous, anxious, or on edge</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="end"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                />
            </RadioGroup>


            <FormLabel component="question2">2) Not being able to stop or control worrying </FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="end"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                />
            </RadioGroup>


            <FormLabel component="legend">3) Worrying too much about different things</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="end"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                />
            </RadioGroup>


            <FormLabel component="legend">4) Trouble relaxing</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="end"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                />
            </RadioGroup>

        </FormControl>

    );
}