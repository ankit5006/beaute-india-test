import { Fragment } from 'react'
import { Form, FormGroup } from 'react-bootstrap'

const Input = ({ field, InputGroup, form: { touched, errors }, ...props }) => {
	const isInvalid = touched[field.name] && errors[field.name]
	const ringColor = isInvalid ? "focus:ring-red-500" : "focus:ring-blue-500"
	const type = props.type && props.type === 'textarea' ? 'textarea' : 'input'

	return (
		<Fragment>
			{InputGroup ? (
				<Fragment>
					<div className="input-group mb-3">
						{props.label && (<Form.Label>{props.label}</Form.Label>)}
						<Form.Control as={type} className={
							`focus:ring-1 ring-opacity-0 ${ringColor}`
						} {...field} {...props} isInvalid={isInvalid} />
						<div className="input-group-append">
							<InputGroup />
						</div>
						{isInvalid &&
							<Form.Control.Feedback type="invalid">{errors[field.name]}</Form.Control.Feedback>}
					</div>
				</Fragment>
			) : (
				<FormGroup className="form-group mb-3">
					{props.label && (
						<Form.Label>{props.label}</Form.Label>
					)}
					<Form.Control
						as={type}
						{...field}
						{...props}
						isInvalid={isInvalid}
					/>
					{isInvalid &&
						<Form.Control.Feedback type="invalid">{errors[field.name]}</Form.Control.Feedback>}
				</FormGroup>
			)}
		</Fragment>
	)
}

export default Input
