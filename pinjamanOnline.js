import imageData from './assets/images/headerbase64';

// playground requires you to assign document definition to a variable called dd
const userData = {
    names: 'Sinar Dyas Pacific',
    job: 'Pelajar',
    currentPosition: 'Ketua Kelas',
    placeOfBirth: 'Karanganyar',
    dateOfBirth: '31-05-1996',
    gender: 'Laki-laki',
    address: 'Mulya Asri 2, Blok X20/78, Cisoka, Balaraja, Banten, 15710',
    phoneNumber: '+6282227777619'
};
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const pdfContent = {
	content: [
		{
			image: 'headerImg',
			width: 550
		},
		'\n',
		{
			text: 'SURAT PERMOHONAN PINJAMAN',
			style: 'header'
		},
		'\n',
		{
			columns: [
				{
					text: `Nama Pemohon: ${userData.names}`,
					width: '70%'
				},
				{
					text: `Tanggal: ${day} - ${month} - ${year}`
				}
			]
		},
		{
			text: 'A. DATA DIRI ANGGOTA',
			style: 'sectionTitle'
		},
		{
			columns: [
				{
					text: '1. Nama (Sesuai KTP)',
					width: 160
				},
				{
					text: `: ${userData.names}`,
					width: 160
				},
				{
					text: 'No. Buku Anggota\t: 14110110099'
				}
			]
		},
		{
			columns: [
				{
					text: '2. Pekerjaan`',
					width: 160
				},
				{
					text: `: ${userData.job}`,
					width: 160
				},
				{
					text: `Jabatan Sekarang\t: ${userData.currentPosition}`
				}
			]
		},
		{
			columns: [
				{
					text: '3. Tempat/Tanggal Lahir',
					width: 160
				},
				{
					text: `: ${userData.placeOfBirth}, ${userData.dateOfBirth}`,
					width: 160
				},
				{
					text: `Jenis Kelamin\t\t\t: ${userData.gender}`,
				}
			]
		},
		{
			columns: [
				{
					text: '4. Alamat Rumah (KTP)',
					width: 160
				},
				{
					text: `: ${userData.address}`
				}
			]
		},
		{
			columns: [
				{
					text: '5. Alamat Tinggal (Saat ini)',
					width: 160
				},
				{
					text: `: ${userData.address}`
				}
			]
		},
		{
				columns: [
				{
					text: '6. No. Telepon / HP',
					width: 160
				},
				{
					text: `: ${userData.phoneNumber}`
				}
			]
		},
		{
			text: 'B. DATA SUAMI / ISTRI',
			style: 'sectionTitle'
		},
		{
			columns: [
				{
					text: '7. Nama',
					width: 160
				},
				{
					text: `: ${userData.names}`,
					width: 160
				},
				{
					text: 'No. Buku Anggota\t: 14110110099'
				}
			]
		},
		{
			columns: [
				{
					text: '8. Pekerjaan',
					width: 160
				},
				{
					text: `: ${userData.job}`,
					width: 160
				},
				{
					text: `Jabatan Sekarang\t: ${userData.currentPosition}`
				}
			]
		},
		{
			columns: [
				{
					text: '9. Alamat Tinggal (Saat ini)`',
					width: 160
				},
				{
					text: `: ${userData.address}`
				}
			]
		},
		{
			columns: [
				{
					text: '\u200B\tNo. Telp Perusahaan',
					width: 160
				},
				{
					text: `: ${userData.phoneNumber}`
				}
			]
		},
		{
			text: 'C. DATA KELUARGA TERDEKAT yang dapat dihubungi.',
			style: 'sectionTitle'
		},
		{
			columns: [
				{
					text: '10. Nama',
					width: 160
				},
				{
					text: `: ${userData.names}`,
					width: 160
				},
				{
					text: 'No. Buku Anggota\t: 14110110099'
				}
			]
		},
		{
			columns: [
				{
					text: '11. Alamat',
					width: 160
				},
				{
					text: `: ${userData.address}`
				}
			]
		},
		{
			columns: [
				{
					text: '12. Hubungan dgn Pemohon',
					width: 160
				},
				{
					text: `: ${userData.names}`,
					width: 160
				},
				{
					text: `No. Telp\t: ${userData.phoneNumber}`
				}
			]
		},
		{
			text: 'D. DATA KEUANGAN ANGGOTA',
			style: 'sectionTitle'
		},
		{
			columns: [
				{
					text: '13. Saldo Simpanan Saham',
					width: 180
				},
				{
					text: ': Rp. 1.000.0000',
					width: 130
				},
				{
					text: '16. Sisa Pinjaman: Rp. 1.000.000'
				}
			]
		},
		{
			columns: [
				{
					text: '14. Saldo Simpanan Megapolitan',
					width: 180
				},
				{
					text: ': Rp. 1.000.0000',
					width: 160
				}
			]
		},
		{
			columns: [
				{
					text: '15. Saldo Simpanan Multiguna',
					width: 180
				},
				{
					text: ': Rp. 1.000.0000',
					width: 160
				}
			]
		},
		{
			text: 'E. PINJAMAN YANG DIMOHON',
			style: 'sectionTitle'
		},
		{
			columns: [
				{
					text: '19. Jumlah Permohonan Pinjaman',
					width: 200
				},
				{
					text: ': Rp. 1.000.0000',
					width: 160
				}
			]
		},
		{
			columns: [
				{
					text: '',
					width: '40%'
				},
				{
					text: 'Satu Juta Rupiah',
					width: '60%'
				}
			]
		},
		{
			columns: [
				{
					text: '20. Jenis Pinjaman',
					width: 200
				},
				{
					text: ': Multiguna',
					width: 130
				},
				{
					text: 'Jangka waktu pengembalian\t: 2 tahun',
					width: '60%'
				}
			]
		},
		{
			columns: [
				{
					text: '21. Tujuan Pinjaman',
					width: 200
				},
				{
					text: ': Modal Usaha',
					width: 160
				}
			]
		},
		{
			columns: [
				{
					text: '22. Jaminan yang akan diserahkan',
					width: 200
				},
				{
					text: ': Tanah 2 hektar',
					width: '60%'
				}
			]
		},
		{
			columns: [
				{
					text: '23. Pemilik Jaminan',
					width: 200
				},
				{
					text: ': John Doe',
					width: 130
				},
				{
					text: 'Status Jaminan\t: Aktif',
					width: '60%'
				}
			]
		},
		{
			columns: [
				{
					text: '24. Lokasi/Kondisi',
					width: 200
				},
				{
					text: ': Baru',
					width: 130
				},
				{
					text: 'Harga Jaminan\t: Rp. 2.000.000.000',
					width: '60%'
				}
			]
		},
		{
			columns: [
				{
					text: '25. Kemampuan Bayar Bulanan',
					width: 200
				},
				{
					text: ': Rp. 100.000',
					width: 100
				},
				{
					text: '(Seratus Ribu Rupiah)',
					width: '30%'
				}
			]
		},
		{
			columns: [
				{
					text: 'Demikian surat permohonan ini saya buat sesuai dengan keadaan yang sebenarny',
					width: '100%'
				}
			]
		},
		{
			columns: [
				{
					text: 'Pemohon',
					width: '25%',
					alignment: 'center'
				},
				{
					text: 'Mengetahui \nSuami/Istri',
					width: '25%',
					alignment: 'center'
				},
				{
					text: 'Penjamin/Kordinator KBA',
					width: '25%',
					alignment: 'center'
				},
				{
					text: 'Staf Pemeriksa',
					width: '25%',
					alignment: 'center'
				}
			]
		},
		'\n\n',
		{
			columns: [
				{
					text: '(.....................)',
					width: '25%',
					alignment: 'center'
				},
				{
					text: '(.....................)',
					width: '25%',
					alignment: 'center'
				},
				{
					text: '(.....................)',
					width: '25%',
					alignment: 'center'
				},
				{
					text: '(.....................)',
					width: '25%',
					alignment: 'center'
				}
			]
		},
		{
			columns: [
				{
					text: 'No BA:',
					width: '25%'
				},
				{
					text: 'No BA:',
					width: '25%'
				},
				{
					text: 'No BA:',
					width: '25%'
				},
				{
					text: 'No BA:',
					width: '25%'
				}
			]
		},
		{
			columns: [
				{
					text: 'Kelengkapan Adm.',
					width: 120,
					fontSize: 10
				},
				{
					text: [
						'1\tFC KTP Suami/Istri 1 Lembar\n',
						'2\tFC Kartu Keluarga 1 Lembar\n',
						'3\tFC Surat Nikah 1 Lembar\n',
						'4\tSurat Ket. Domisili asli dari kelurahan\n',
						'5\tFC Sertifikat DIKSAR 1 Lembar\n',
						'6\tFC Sertifikat Literasi Keuangan 1 Lembar\n',
						'7\tFC Surat Keterangan Kerja\n',
						'8\tFC Rek. Listrik, air, dan telpon\n'
					],
					width: '45%',
					fontSize: 10
				},
				{
					text: [
						'1\tFC KTP Suami/Istri 1 Lembar\n',
						'2\tFC Kartu Keluarga 1 Lembar\n',
						'3\tFC Surat Nikah 1 Lembar\n',
						'4\tSurat Ket. Domisili asli dari kelurahan\n',
						'5\tFC Sertifikat DIKSAR 1 Lembar\n',
						'6\tFC Sertifikat Literasi Keuangan 1 Lembar\n',
						'7\tFC Surat Keterangan Kerja\n',
						'8\tFC Rek. Listrik, air, dan telpon\n'
					],
					width: '50%',
					fontSize: 10
				}
			]
		},
		'\n\n',
		{
			text: 'Pinjam dan Kelola Uang Sesuai Kemampuan Anda',
			bold: true,
			alignment: 'center'
		}
	],
	styles: {
		header: {
			fontSize: 18,
			bold: true,
			alignment: 'center'
		},
		bigger: {
			fontSize: 15,
			italics: true
		},
		sectionTitle: {
			bold: true
		},
		w30: {
			width: '30%'
		}
	},
	defaultStyle: {
		columnGap: 0,
		lineHeight: 2
	},
	images: {
		headerImg: imageData
	}
};

export default pdfContent;