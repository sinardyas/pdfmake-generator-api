import imageData from './assets/images/headerbase64';

class PendaftaranOnline {
	constructor(
		namaLengkap,
		namaReferral,
		noBukuAnggota,
		jenisKeanggotaan,
		jenisIdentitas,
		noIdentitas,
		alamatKtp,
		alamatTinggal,
		pendidikan,
		pekerjaan,
		usaha,
		agama,
		tempatLahir,
		tanggalLahir,
		jenisKelamin,
		ibuKandung,
		statusKeluarga,
		tanggalKawin,
		namaIstriSuami,
		noTelpRumah,
		noHandphone,
		alamatKantor,
		noTelpKantor,
		ahliWaris
	) {
		this.namaLengkap = namaLengkap;
		this.namaReferral = namaReferral;
		this.noBukuAnggota = noBukuAnggota;
		this.jenisKeanggotaan = jenisKeanggotaan;
		this.jenisIdentitas = jenisIdentitas;
		this.noIdentitas = noIdentitas;
		this.alamatKtp = alamatKtp;
		this.alamatTinggal = alamatTinggal;
		this.pendidikan = pendidikan;
		this.pekerjaan = pekerjaan;
		this.usaha = usaha;
		this.agama = agama;
		this.tempatLahir = tempatLahir;
		this.tanggalLahir = tanggalLahir;
		this.jenisKelamin = jenisKelamin;
		this.ibuKandung = ibuKandung;
		this.statusKeluarga = statusKeluarga;
		this.tanggalKawin = tanggalKawin;
		this.namaIstriSuami = namaIstriSuami;
		this.noTelpRumah = noTelpRumah;
		this.noHandphone = noHandphone;
		this.alamatKantor = alamatKantor;
		this.noTelpKantor = noTelpKantor;
		this.ahliWaris = ahliWaris;
	}

	clone(data) {
		this.namaLengkap = data.namaLengkap ? data.namaLengkap : '';
		this.namaReferral = data.namaReferral ? data.namaReferral : '';
		this.noBukuAnggota = data.noBukuAnggota ? data.noBukuAnggota : '';
		this.jenisKeanggotaan = data.jenisKeanggotaan ? data.jenisKeanggotaan : '';
		this.jenisIdentitas = data.jenisIdentitas ? data.jenisIdentitas : '';
		this.noIdentitas = data.noIdentitas ? data.noIdentitas : '';
		this.alamatKtp = data.alamatKtp ? data.alamatKtp : '';
		this.alamatTinggal = data.alamatTinggal ? data.alamatTinggal : '';
		this.pendidikan = data.pendidikan ? data.pendidikan : '';
		this.pekerjaan = data.pekerjaan ? data.pekerjaan : '';
		this.usaha = data.usaha ? data.usaha : '';
		this.agama = data.agama ? data.agama : '';
		this.tempatLahir = data.tempatLahir ? data.tempatLahir : '';
		this.tanggalLahir = data.tanggalLahir ? data.tanggalLahir : '';
		this.jenisKelamin = data.jenisKelamin ? data.jenisKelamin : '';
		this.ibuKandung = data.ibuKandung ? data.ibuKandung : '';
		this.statusKeluarga = data.statusKeluarga ? data.statusKeluarga : '';
		this.tanggalKawin = data.tanggalKawin ? data.tanggalKawin : '';
		this.namaIstriSuami = data.namaIstriSuami ? data.namaIstriSuami : '';
		this.noTelpRumah = data.noTelpRumah ? data.noTelpRumah : '';
		this.noHandphone = data.noHandphone ? data.noHandphone : '';
		this.alamatKantor = data.alamatKantor ? data.alamatKantor : '';
		this.noTelpKantor = data.noTelpKantor ? data.noTelpKantor : '';
		this.ahliWaris = Array.isArray(data.ahliWaris) && (data.ahliWaris.length > 0) ? data.ahliWaris : [];

		return this;
	}
}

const templatePdf = (data) => {
	const userData = new PendaftaranOnline().clone(data);

	let ahliWarisTable = [['No', 'Nama Lengkap', 'Hubungan']];
	ahliWarisTable = [
		...ahliWarisTable,
		...userData.ahliWaris.map((x, i) => [i, x && x.nama, x && x.hubungan])
	];

	return {
		header: {
			image: 'headerImg',
			width: 550,
			alignment: 'center'
		},
		content: [
			'\n',
			{
				text: 'SURAT PERMOHONAN MENJADI ANGGOTA',
				style: 'header'
			},
			{
				columns: [
					{
						text: '',
						width: '50%'
					},
					{
						table: {
							widths: ['auto', '*'],
							heights: 10,
							margin: 0,
							body: [
								['No. Buku Anggota', ''],
								['Tanggal Masuk', ''],
								['TP-KK', '']
							]
						}
					}
				]
			},
			'Dengan hormat,',
			'Saya yang bertanda tangan di bawah ini mohon diterima sebagai anggota Credit Union Bererod Gratia (CUBG). Saya setuju dan akan mematuhi Anggaran Dasar/Anggaran Rumah Tangga serta ketentuan-ketentuan lainnya.',
			'Data pribadi saya adalah sebagai berikut.',
			{
				columns: [
					{
						text: '1. Nama Lengkap',
						width: 160
					},
					{
						text: `: ${userData.namaLengkap}`,
						width: 160
					},
					{
						text: `Panggilan\t: ${userData.namaPanggilan}`
					}
				]
			},
			'2. Nama orang yang memperkenalkan Credit Union Bererod Gratia (CUBG) kepada saya,',
			{
				columns: [
					{
						text: 'Nama',
						width: 160
					},
					{
						text: `: ${userData.namaReferral}`,
						width: 160
					},
					{
						text: `No. Buku Anggota\t: ${userData.noBukuAnggota}`
					}
				]
			},
			{
				columns: [
					{
						text: '3. Jenis Keanggotaan',
						width: 160
					},
					{
						text: `: ${userData.jenisKeanggotaan}`,
						width: 160
					}
				]
			},
			{
				columns: [
					{
						text: '4. Identitas',
						width: 160
					},
					{
						text: `: ${userData.jenisIdentitas}`,
						width: 40
					},
					{
						text: 'No. Identitas:',
						width: 80
					},
					{
						table: {
							body: [
								[
									'3',
									'1',
									'3',
									'1',
									'3',
									'1',
									'3',
									'1',
									'3',
									'1',
									'3',
									'1',
									'3',
									'1',
									'3',
									'1'
								]
							]
						}
					}
				]
			},
			'\n',
			{
				columns: [
					{
						text: '5. Alamat KTP/SIM \n\t(Sesuai Identitas)',
						width: 160
					},
					{
						text: `: ${userData.alamatKtp}`
					}
				]
			},
			{
				columns: [
					{
						text: '6. Alamat Tinggal',
						width: 160
					},
					{
						text: `: ${userData.alamatTinggal}`
					}
				]
			},
			{
				columns: [
					{
						text: '7. Pendidikan',
						width: 160
					},
					{
						text: `: ${userData.pendidikan}`
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
						text: `: ${userData.pekerjaan}`
					}
				]
			},
			{
				columns: [
					{
						text: '9. Usaha',
						width: 160
					},
					{
						text: `: ${userData.usaha}`
					}
				]
			},
			{
				columns: [
					{
						text: '10. Agama',
						width: 160
					},
					{
						text: `: ${userData.agama}`
					}
				]
			},
			{
				columns: [
					{
						text: '11. Tempat/Tanggal Lahir',
						width: 160
					},
					{
						text: `: ${userData.tempatLahir}, ${userData.tanggalLahir}`
					},
					{
						text: `Jenis Kelamin\t: ${userData.jenisKelamin}`,
						width: 160
					},
				]
			},
			{
				columns: [
					{
						text: '12. Nama Ibu Kandung',
						width: 160
					},
					{
						text: `: ${userData.ibuKandung}`
					}
				]
			},
			{
				columns: [
					{
						text: '13. Status Keluarga',
						width: 160
					},
					{
						text: `: ${userData.statusKeluarga}`
					},
					{
						text: `Tanggal Kawin\t: ${userData.tanggalKawin}`,
						width: 160
					},
				]
			},
			{
				columns: [
					{
						text: '14. Nama Istri/Suami',
						width: 160
					},
					{
						text: `: ${userData.namaIstriSuami}`
					}
				]
			},
			{
				columns: [
					{
						text: '15. Ahli Waris',
						width: 160
					},
					{
						table: {
							widths: ['auto', 'auto', 60],
							heights: 10,
							margin: 0,
							body: ahliWarisTable
						}
					}
				]
			},
			'\n',
			{
				columns: [
					{
						text: '16. No. Telp Rumah',
						width: 160
					},
					{
						text: `: ${userData.noTelpRumah}`
					},
					{
						text: `HP\t: ${userData.noHandphone}`,
						width: 160
					},
				]
			},
			{
				columns: [
					{
						text: '17. Alamat Tempat Kerja/Kantor',
						width: 160
					},
					{
						text: `: ${userData.alamatKantor}`
					},
					{
						text: `Telp. Kantor\t: ${userData.noTelpKantor}`,
						width: 160
					},
				]
			},
			{
				columns: [
					{
						text: 'Demikian surat permohonan ini saya sampaikan untuk dapat menjadi bahan pertimbangan',
						width: '100%'
					}
				]
			},
			{
				columns: [
					{
						text: [
							{
								text: 'Yang Memperkenalkan',
								width: '50%',
								alignment: 'center'
							},
							'\n',
							'\n',
							'\n',
							'\n',
							'\n',
							'\n',
							'\n',
							{
								text: '(..................................)',
								width: '50%',
								alignment: 'center'
							}
						]
					},
					{
						widths: 250,
							table: {
							body: [
								[
									{
										text: [
											'\n',
											{
												text: 'Tempelkan Pas Photo \n2x3 \nDisini',
												alignment: 'center'
											}
										]
									},
									{
										text: [
												'\n',
												{
													text: '.................., ...............................\n'
												},
												{
													text: 'Pemohon',
													alignment: 'center'
												},
												'\n', '\n', '\n', '\n',
												{
													text: '(.......................................)',
														alignment: 'center'
												},
										]
									}
								]
							]
						}
					}
				]
			},
			'\n\n\n\n',
			'Menyetujui,',
			{
				columns: [
					{
						text: [
							{
								text: 'Komite TP-KK',
								width: '33%',
								alignment: 'center'
							},
							'\n',
							'\n',
							'\n',
							'\n',
							'\n',
							{
								text: '(..................................)',
								alignment: 'center'
							}
						]
					},
					{
						text: [
							{
								text: 'Kepala Kantor',
								width: '33%',
								alignment: 'center'
							},
							'\n',
							'\n',
							'\n',
							'\n',
							'\n',
							{
								text: '(..................................)',
								alignment: 'center'
							}
						]
					},
					{
						text: [
							{
								text: 'Staf Yang Menerima',
								width: '33%',
								alignment: 'center'
							},
							'\n',
							'\n',
							'\n',
							'\n',
							'\n',
							{
								text: '(..................................)',
								alignment: 'center'
							}
						]
					}
				]
			},
			'\n',
			{
				text: 'Saya, Pemohon Bersedia :',
				bold: true
			},
			{
				text: [
					{
						text: 'A. Melampirkan :\n'
					},
					{
						text: '[   ] 2 (dua) lembar pas photo 2x3 cm\n'
					},
					{
						text: '[   ] Photo copy KK\n'
					},
					{
						text: '[   ] Photo copy KTP/SIM yang masih berlaku (photo copy KTP suami & istri bagi yang sudah menikah)\n'
					},
					{
						text: '[   ] Photo copy Surat Nikah (bagi yang sudah menikah)\n'
					},
					{
						text: '[   ] Surat Keterangan Domisili (Asli)\n'
					}
				]
			},
			{
				text: 'B. Mengikuti :'
			},
			{
				columns: [
					{ text: '\n', width: 20 },
					{
						ul: [
							'Pendidikan Dasar',
							'Pendidikan Literasi Keuangan',
						]
					}
				]
			},
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
			},
			tableExample: {
				margin: [0, 5, 0, 15]
			},
		},
		defaultStyle: {
			columnGap: 0,
			lineHeight: 2
		},
		images: {
			headerImg: imageData
		}
	};
};

export default templatePdf;