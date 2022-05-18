import st from 'styled-components';
import pt from 'prop-types'

export const MainLayout = ({
	children,
}) => (
	<Parent>
        {children}
	</Parent>
);

const Parent = st.div`
	margin: 20px;
`;

MainLayout.propTypes ={
	children: pt.node.isRequired,
};
