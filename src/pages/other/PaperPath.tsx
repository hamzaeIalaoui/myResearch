
import LeftSidebar from '@/Layouts/LeftSidebar';
import RightSidebar from '@/Layouts/RightSidebar';
import Topbar from '@/Layouts/Topbar';
import { FormInput } from '@/components';
import { Suspense } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Footer } from 'rsuite';
import { Venue } from '../ui/tables/types';
import { Column } from 'react-table';
import { Table } from '@/components';
import { venueRecords } from '../ui/tables/data';

const columns : ReadonlyArray<Column> = [
	{
		Header: 'Rank',
		accessor: 'id',
		defaultCanSort: true,
	},
	{
		Header: 'Name',
		accessor: 'name',
		defaultCanSort: true,
	},
	{
		Header: 'Type',
		accessor: 'type',
		defaultCanSort: false,
	},
	{
		Header: 'H-Index',
		accessor: 'HIndex',
		defaultCanSort: true,
	},
	{
		Header: 'Website',
		accessor: 'website',
		defaultCanSort: false,
	},
	{
		Header: 'Country',
		accessor: 'country',
		defaultCanSort: false,
	},
]

const sizePerPageList = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: venueRecords.length,
	},
]

const PaperPath = () => {
    
  return (
    <div>
		
     <Suspense fallback={<div />}>
			<div className="wrapper">
				<Suspense fallback={<div />}>
					<Topbar
					// openLeftMenuCallBack={openMenu} topbarDark={topbarDark}
					/>
				</Suspense>

				<Suspense fallback={<div />}>
					<LeftSidebar
					//  isCondensed={isCondensed} leftbarDark={leftbarDark} hideUserProfile={true}
					/>
				</Suspense>

				<div className="content-page">
					<div className="content">
						<Suspense fallback={<div />}>
							{/* <Container fluid>
								<Suspense fallback={<Preloader />}>{}</Suspense>
							</Container> */}
							<Row>
							  <Col lg={12}>
								  <PaperPathContent />
							  </Col>
		  					</Row>
						</Suspense>
					</div>
					<Suspense fallback={<div />}>
						<Footer />
					</Suspense>
				</div>

				<Suspense fallback={<div />}>
					<RightSidebar />
				</Suspense>
			</div>
		</Suspense>
    </div>
	
	
  );
};

const PaperPathContent = () => {
	const methods = useForm()
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = methods
	return (
		<Card>
			<Card.Header>
				<h4 className="header-title">Paper Path</h4>
				<p className="text-muted mb-0">
					Most common form control, text-based input fields. Includes support
					for all HTML5 types: 
				</p>
			</Card.Header>

			<Card.Body>
				<Row>
					<Col lg={6}></Col>
						<form onSubmit={handleSubmit(() => {})}></form>
							<FormInput
								label="Title"
								type="text"
								name="text"
								containerClass="mb-3"
								register={register}
								key="text"
								errors={errors}
								control={control}
							/>
							<FormInput
									label="Abstract"
									type="textarea"
									name="textarea"
									rows={5}
									containerClass="mb-3"
									register={register}
									key="textarea"
									errors={errors}
									control={control}
								/>
							<Button variant="primary" type="submit">
								Generate
							</Button>
					<Col lg={6}></Col>
				</Row>
			</Card.Body>
			<Card.Body>
				<Table<Venue>
					columns={columns}
					data={venueRecords}
					pageSize={5}
					sizePerPageList={sizePerPageList}
					isSortable={true}
					pagination={true}
				/>
			</Card.Body>
		</Card>
	);
}

export default PaperPath;